import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import NavBar from "../components/NavBar";
import useMovieSearch from "../hooks/useMovieSearch";
import { useState } from "react";

function HomePage() {
  const [saveSearch, setSaveSearch]= useState("2024")
  
  const { data, loading, error } = useMovieSearch(saveSearch);
  const navigate = useNavigate()

  return (
    <div className="bg-black min-h-screen">
      <NavBar value={saveSearch} onChange={setSaveSearch}></NavBar>
      <div className="bg-white/10 flex flex-col px-8 py-28 justify-items-center items-center mt-3 gap-3 min-h-60">
        <a className="text-red-700">REFINER ACADEMY- WEEK 4</a>
        <a className="text-white font-bold text-4xl">
          Discover your next{" "}
          <a className="text-red-700 font-bold text-4xl">favourite film</a>
        </a>

        <a className="text-white/30">
          Search 500,000+ movies. Save your watchlist. Never forget a great
          film.{" "}
        </a>
        <div>
          <input onChange={(newSearch)=>setSaveSearch(newSearch.target.value)}
            className="bg-white/10 border rounded-lg w-60 py-2 px-4"
            placeholder="Search a movie tittle..."
          ></input>
          
          <button onClick={() => {setSaveSearch("game")}
           
          } className="border rounded-lg  bg-red-700 ml-4 py-2 px-4 text-white">
            Search
          </button>
        
        </div>
      </div>
      <div className=" flex flex-row text-white/40 px-4  bg-white/10  justify-center gap-72 md:gap-10">
        <div>
          <a className="text-white font-bold text-2xl mr-7">
            Popular right now
          </a>
        </div>
        <div className=" flex flex-row text-white/40 px-4 gap-10 md:gap-4 justify-items-center items-center justify-center">
          <a>All</a>
          <a>Action</a>
          <a>Comedy</a>
          <a>Drama</a>
          <a>Horror</a>
          <a>Sci-Fi</a>
          <a>Animation</a>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-7 px-28">
        {!loading && !error ? (
          data.Search.map((movie) => <MovieBox movie={movie}></MovieBox>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
