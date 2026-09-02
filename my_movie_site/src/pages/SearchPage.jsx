import MovieBox from "../components/MovieBox"
import NavBar from "../components/NavBar"
import useMovieSearch from "../hooks/useMovieSearch"

function SearchPage(){
  const {data, loading, error, Search} = useMovieSearch()

  return(
    <div className="bg-black text-white min-h-screen">
      <NavBar></NavBar>
      <div className="flex flex-row justify-between px-28">
        <div className="flex flex-col">
          <a className="font-bold, text-3xl">Results for "trump"</a>
         <a className="text-white/35">383 movies found</a>
        </div>
         <div className="border rounded-lg bg-white/10 border-black">
          <select className="border rounded-lg bg-white/10 border-black text-white"> 
            <option className="border rounded-lg bg-white/10 border-black">relevance</option>
            <option className="border rounded-lg bg-white/10 border-black">newest first</option>
            <option className="border rounded-lg bg-white/10 border-black">oldest first</option>
            <option className="border rounded-lg bg-white/10 border-black">A-Z</option>
          </select>
         </div>
      </div>
      <div className="grid grid-cols-5 gap-4 px-28 py-8">
        {!loading && !error ? (data.Search?.map((movie) => <MovieBox movie={movie}></MovieBox>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
export default SearchPage