import { useEffect, useState } from "react";

const API_URL = "https://www.omdbapi.com/?apikey=a9256e35&s=";
function useMovieSearch(initialQuery) {
  const [query, setQuery] = useState(initialQuery)
  const URL= API_URL+query
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eror, setError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
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
  }, [query]);
  console.log(data)
  return { data, loading, eror };
}

export default useMovieSearch;
