import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../services/api_service";
import { ButtonRegular } from "../../../components/ui(global)/buttons/action-buttons/ButtonRegular";
import "./HeroSection.css";

export function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //to display top 10 trending movies in hero section
  useEffect(() => {
    getTrendingMovies().then((movies) => {
      setTrendingMovies(movies.slice(0, 10));
    });
  }, []);

  //to change the movie displayed every 5 seconds for hero section carousel
  useEffect(() => {
    if (trendingMovies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [trendingMovies]);

  if (trendingMovies.length === 0) return <div className="hero-section-placeholder">Loading...</div>;

  //current movie to be displayed
  const currentMovie = trendingMovies[currentIndex];

  return (
    <>
      <div
        className="hero-section text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <p className="text-white font-bold text-2xl">{currentMovie.title}</p>
        <div className="flex ">
            <p>{currentMovie.popularity}|</p>
            <p>{currentMovie.media_type}|</p>
            <p>genre</p>
        </div>
        <p>{currentMovie.overview}</p>

<div className="buttons flex gap-3">
          <ButtonRegular text="Watch Now" />
        <ButtonRegular text="Add to Watchlist" />
</div>
      
      </div>
    </>
  );
}
