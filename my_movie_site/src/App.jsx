import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieInfo from "./pages/MovieInfo";
import SearchPage from "./pages/SearchPage";

function Movie() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/details/:movieInfo"
          element={<MovieInfo></MovieInfo>}
        ></Route>
        <Route
          path="/search/:query"
          element={<SearchPage></SearchPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Movie;
