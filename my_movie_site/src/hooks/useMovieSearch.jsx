import { useEffect, useState } from "react";

const API_URL = "https://www.omdbapi.com/?apikey=a9256e35";

function useMovieSearch(query, id) {
  
  let URL= API_URL
  if(query===""){
    URL=API_URL+"2024"
  }else{
    URL=API_URL+query
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        
         let URL;

        if (id) {
          URL = `${API_URL}&i=${id}`;
        } else if (query === "") {
          URL = `${API_URL}&s=2024`;
        } else {
          URL = `${API_URL}&s=${query}`;
        }

        const response = await fetch(URL);
        const body = await response.json();
        setData(body);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchMovies();
  }, [query, id]);
  console.log(data)
  return { data, loading, error };
}

export default useMovieSearch;
