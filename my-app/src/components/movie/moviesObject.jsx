import MoviesCard from "./moviesCard";

function MoviesObject(props) {
  const { movies } = props;

  let hobbitSerries = {};
  let lordsSeries = {};
  let titlesMoviesSeries = {};
  movies.forEach((movie) => {
    switch (movie.name) {
      case "The Hobbit Series":
        titlesMoviesSeries[1] = movie;
        break;
      case "The Unexpected Journey":
        hobbitSerries[1] = movie;
        break;
      case "The Desolation of Smaug":
        hobbitSerries[2] = movie;
        break;
      case "The Battle of the Five Armies":
        hobbitSerries[3] = movie;
        break;
      case "The Lord of the Rings Series":
        titlesMoviesSeries[2] = movie;
        break;
      case "The Fellowship of the Ring":
        lordsSeries[1] = movie;
        break;
      case "The Two Towers ":
        lordsSeries[2] = movie;
        break;
      case "The Return of the King":
        lordsSeries[3] = movie;
        break;
    }
  });

  return (
    <MoviesCard
      hobbitSerries={hobbitSerries}
      lordsSeries={lordsSeries}
      titlesMoviesSeries={titlesMoviesSeries}
    />
  );
}

export default MoviesObject;
