import { useEffect, useState } from "react";
import { getMovieGenres, getTrendingMovies } from "../../../services/api_service";
import { ButtonRegular } from "../../../components/ui(global)/buttons/action-buttons/ButtonRegular";
import "./HeroSection.css";
import { Diamond } from "lucide-react";

//add hero section skeleton, make it a func for reusability
//moved outside component because to avoid creating this component every render
//reason(in this context): the skeleton card comp is
// rendered with conditional rendering outside the return() of heroSection comp
//exception: the comp is used inside return() of the main/parent comp
const SkeletonCard = () => (
  <div className="w-full h-[65vh] rounded-sm bg-gray-300 animate-pulse" />
);

export function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [genres, setGenres] = useState<any[]>([])

  //to get the genres
  useEffect(() => {
    getMovieGenres().then(setGenres)
  }, [])

  //to display top 10 trending movies in hero section
  useEffect(() => {
    getTrendingMovies().then((movies) => {
      setTrendingMovies(movies.slice(0, 10));
    });
  }, []);

  //changes genre ids to genre names
  const getGenreNames = (genreIds: number[]) => {
          const genre = genres.find(genre => genre.id === genreIds[0])
          return genre?.name

  }

  //to change the movie displayed every 5 seconds for hero section carousel
  useEffect(() => {
    if (trendingMovies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [trendingMovies]);

  if (trendingMovies.length === 0) return <SkeletonCard />;

  //current movie to be displayed
  const currentMovie = trendingMovies[currentIndex];

  const movieOverview = currentMovie.overview?.slice(0, 150) + "..."

  return (
    <>
      <div
        className="hero-section text-white flex flex-col pl-5 justify-center pt-50 gap-2 sm:pt-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "65vh",
        }}
      >
        <p className="text-white font-bold text-2xl sm:text-3xl">{currentMovie.title}</p>

        <div className="flex gap-1 items-center">
          <p>{currentMovie.popularity}</p> <Diamond size={10}/>
          <p>{currentMovie.media_type}</p> <Diamond size={10}/>
          <p>{getGenreNames(currentMovie.genre_ids)}</p>
        </div>
        <p className="hidden sm:block w-[50%] h-[8vw] text-sm">{movieOverview}</p>

        <div className="buttons flex gap-3">
          <ButtonRegular text="Watch Now" />
          <ButtonRegular text="Add to Watchlist" />
        </div>
      </div>
    </>
  );
}
