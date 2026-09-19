import { useState } from "react";
import MovieBox from "../components/MovieBox";
import NavBar from "../components/NavBar";
import useMovieSearch from "../hooks/useMovieSearch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const { query = "" } = useParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const { data, loading, error, Search } = useMovieSearch(query);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar
        onChange={setSearchQuery}
        value={searchQuery}
        onSubmit={(query) => {
          navigate(`/search/${encodeURIComponent(query)}`);
        }}
      ></NavBar>
      <div className="flex flex-row justify-between px-28">
        <div className="flex flex-col">
          <a className="font-bold, text-3xl">Results for "{query}"</a>
          <a className="text-white/35">383 movies found</a>
        </div>
        <div className="border rounded-lg bg-white/10 border-black">
          <select className="border rounded-lg bg-white/10 border-black text-white">
            <option className="border rounded-lg bg-white/10 border-black">
              relevance
            </option>
            <option className="border rounded-lg bg-white/10 border-black">
              newest first
            </option>
            <option className="border rounded-lg bg-white/10 border-black">
              oldest first
            </option>
            <option className="border rounded-lg bg-white/10 border-black">
              A-Z
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 px-28 py-8">
        {!loading && !error ? (
          data.Search?.map((movie) => <MovieBox movie={movie}></MovieBox>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default SearchPage;
