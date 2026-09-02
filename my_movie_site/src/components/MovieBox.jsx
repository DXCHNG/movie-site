import { Link } from "react-router-dom"

function MovieBox({movie}){

  return(
    <Link to={`/movie_info/${encodeURIComponent(movie)}`} state={(movie)}>
    
   
      <div className="flex flex-col">
        
        <img  src={movie.Poster==""?"https://placehold.co/600x400":movie.Poster}></img>
        <a className="text-white">{movie.Year}</a>
        <a className="text-white">{movie.Title}</a>
      </div>
      
      
     
    </Link>
  )
}
export default MovieBox