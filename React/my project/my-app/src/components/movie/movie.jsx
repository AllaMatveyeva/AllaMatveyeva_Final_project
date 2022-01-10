import { useEffect, useState } from "react";

import { getMovies } from "../../api/api";
import Loader from "../../api/loader";

import MoviesObject from "./moviesObject";

function Movie(props) {
  const [movies, setMovies] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.removeItem("letter");
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMovies();
        setMovies(response.data.docs);
        console.log(response.data.docs);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="movies-block">
        {isLoading && <Loader />}
        {isError && "Error"}
        {
          !isLoading && !isError && <MoviesObject movies={movies} />

          // movies.map((movie, index) => (
          //   <MoviesObject movie={movie} index={index} />
          // ))}
        }
      </div>
    </>
  );
}

export default Movie;
