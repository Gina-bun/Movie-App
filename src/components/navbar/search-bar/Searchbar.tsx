import { Search } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../../utils/debounce";
import { searchMovies } from "../../../services/api_service";

export function Searchbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeSearchPopup = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
       if(closeSearchPopup.current && !closeSearchPopup.current.contains(event.target as Node)){
        setIsOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const debouncedSearch = useRef(
    debounce(async (searchTerm: string) => {
      if (searchTerm.length < 2) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      const data = await searchMovies(searchTerm);
      setResults(data);
      setIsOpen(true);
    }, 500)
  ).current

  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  const handleSelect = (movie: any) => {
    navigate(`/movie/${movie.id}`);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <>
      <div ref={closeSearchPopup} style={{ position: "relative" }}>
        <div
          id="search-container"
          className="flex border rounded-md max-sm:w-70 p-1 max-sm:self-center"
        >
          <Search size={20} className="m-auto" />
          <input
            type="text"
            className="outline-none flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
          />
        </div>

        {isOpen && results.length > 0 && (
          <div 
          style={{position: "absolute"}}
          className="search-dropdown bg-amber-50 mt-2 p-2 max-sm:w-70 max-md:w-60 rounded-md">
            {results.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleSelect(movie)}
                className="search-result-item"
              >
                <p>{movie.title || movie.name} {movie.genre}</p>
                <p>{`${new Date(movie.release_date).getFullYear()}`}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
