import NavBar from "../components/NavBar"
import {
  Navigate,
  useLocation,
  
  useParams,
} from "react-router-dom";

function MovieInfo(){
  const location = useLocation()
  

  return(
    <div className="bg-black min-h-screen">
      <NavBar></NavBar>
      <div className="flex flex-row gap-7 py-12 px-3">
    <div>
      <img src="https://m.media-amazon.com/images/M/MV5BNDJjNmQ2YzQtYjZlYS00MWJkLWE3ODctMGU0ZmMyZmVhNDEzXkEyXkFqcGc@._V1_SX300.jpg"></img>
    </div>
    <div className="text-white flex flex-col mb-4 px-7">
    <a className="text-white font-bold text-4xl  mb-5">Torching 2024: A Roast of the year</a>
    <a className="text-white/25 mb-4">2024 - 42 min - TV-MA</a>
    <a className="border rounded-lg w-24 px-4 py-1 bg-white/10 mb-8 border-black">comedy</a>

    <a className=" mb-8 text-red-500">5.4<a className=" mb-8 text-white">/10</a></a>
    <a className="bg-red-600 w-44 px-4 py-2 rounded-lg mb-8">Add to watchlist</a>
    <a className="text-white/50 ">PLOT</a>
    <a className="text-white/75 mb-3">A roast evnt clcbrating the past year's highlights, featuring comendians Mark Normand, Ms. Pat, Sam Morril, Tim Dillon, firlmed at the Bellwether in Los Angeles on December 17.</a>
    <div className="flex flex-wrap gap-3 ">
    <div className="border rounded w-60 px-4 py-1 flex flex-col bg-white/10 border-black">
      <a>DIRECTOR</a>
      <a>Joe Demaio</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>WRITER</a>
      <a>Benji Aflalo</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>CAST</a>
      <a>Jffrey Rose, Hannah Berner</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
      <a>LANGUAGE</a>
      <a>English</a>
    </div>
    <div className="border rounded w-60 px-4 py-1  flex flex-col bg-white/10 border-black">
    <a>COUNTRY</a>
    <a>United</a>
    </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}
export default MovieInfo