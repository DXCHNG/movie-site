import { Navigate, useNavigate } from "react-router-dom";

function NavBar({onChange, value, onSubmit}){
  const navigate = useNavigate()
  

  return(
    <div className="bg-black items-center justify-items-center ">
    <nav className="flex flex-row justify-items-center items-center justify-center">
      <div>
        <a className="text-red-700 font-bold text-2xl">CINE</a>
        <a className="text-white font-bold text-2xl mr-2 md:mr-32">SEARCH</a>
        </div>
        <form onSubmit={(event)=> {event.preventDefault();
          onSubmit(value)
        }}>
          <input value={value} onChange={(newSearch)=> onChange(newSearch.target.value)} className="bg-white/10 border rounded-lg px-3 py-2 mt-3 md:ml-8 w-32 md:w-80 text-white" placeholder="Search movies..."></input>
        </form>
        
        <button onClick={() => navigate ("/")} className="text-white/65  text-xl ml-5 md:ml-32">Home</button>
        <button onClick={() => navigate ("/")} className="hidden md:block text-white/65  text-xl ml-2 md:ml-4 ">Watchlist</button>
      </nav>
      </div>
  )
}

export default NavBar