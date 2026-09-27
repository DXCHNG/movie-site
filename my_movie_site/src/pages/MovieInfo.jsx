import NavBar from "../components/NavBar"
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";

function MovieInfo(){
   const location = useLocation()
  const movie = location.state
   const navigate = useNavigate();
  const { data, loading, error } = useMovieSearch("", movie.imdbID);
   
   if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Something went wrong</div>;
  }

  
  return(
    <div className="bg-black min-h-screen">
      <NavBar></NavBar>
       <div>
        <button
            onClick={() => navigate(-1)}
            className="text-white px-10 py-3 mt-3 mb-5 w-40 "
          >
            ⬅️ Back
          </button>
          </div>
      <div className="flex flex-col md:flex-row gap-7 py-12 px-3">
       
    <div>
      <img src={data.Poster}></img>
    </div>
    <div className="text-white flex flex-col mb-4 px-7">
    <a className="text-white font-bold text-4xl  mb-5">{data.Title}</a>
    <a className="text-white/25 mb-4">{movie.Year} - {data.Runtime} - TV-MA</a>
    <a className="border rounded-lg w-60 px-4 py-1 bg-white/10 mb-8 border-black">{data.Genre}</a>

    <a className=" mb-8 text-red-500">5.4<a className=" mb-8 text-white">/10</a></a>
    <a className="bg-red-600 w-44 px-4 py-2 rounded-lg mb-8">Add to watchlist</a>
    <a className="text-white/50 ">PLOT</a>
    <a className="text-white/75 mb-3">{data.Plot}</a>
    <div className="flex flex-wrap gap-3 ">
    <div className="border rounded w-60 px-4 py-1 flex flex-col bg-white/10 border-black">
      <a>DIRECTOR</a>
      <a>{data.Director}</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>WRITER</a>
      <a>{data.Writer}</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>CAST</a>
      <a>{data.Actors}</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>LANGUAGE</a>
      <a>{data.Language}</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
    <a>COUNTRY</a>
    <a>{data.Country}</a>
    </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}
export default MovieInfo