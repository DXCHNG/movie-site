function NavBar({onChange, value}){

  return(
    <div className="bg-black items-center justify-items-center">
    <nav>
        <a className="text-red-700 font-bold text-2xl">CINE</a>
        <a className="text-white font-bold text-2xl mr-32 md:mr-10">SEARCH</a>
        <input value={value} onChange={(newSearch)=> onChange(newSearch.target.value)} className="bg-white/10 border rounded-lg px-3 py-2 mt-3 ml-8 w-80 text-white" placeholder="Search movies..."></input>
        <a className="text-white/65  text-xl ml-32 md:ml-10">Home</a>
        <a className="text-white/65  text-xl ml-8 md:ml-4">Watchlist</a>
      </nav>
      </div>
  )
}

export default NavBar