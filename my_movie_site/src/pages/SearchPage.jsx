import { useState } from "react";
import MovieBox from "../components/MovieBox";
import NavBar from "../components/NavBar";
import useMovieSearch from "../hooks/useMovieSearch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const { query = "" } = useParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const { data, loading, error} = useMovieSearch(query);
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
      <div className="flex flex-row justify-between px-10 md:px-28 py-10">
        <div className="flex flex-col">
          <a className="font-bold text-white/45 text-3xl">Results for "{query}"</a>
          <a className="text-white/35">{data?.Search?.length || 0} movies found</a>
        </div>
       
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10 md:px-28 py-8">
        {!loading && !error ? (
          data.Search?.map((movie) => <MovieBox  key={movie.imdbID} movie={movie}></MovieBox>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default SearchPage;
