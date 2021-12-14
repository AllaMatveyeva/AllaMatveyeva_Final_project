import SwipeableTextMobileStepper from "./carusel/carusel";

import { imagesLord } from "../resources/imagesLord";
import { imagesHobbit } from "../resources/imagesHobbit";
import "./moviesCard.scss";
import { useState } from "react";
import MoviecardModal from "./MoviecardModal";

function MoviesCard(props) {
  console.log(props);
  const { hobbitSerries, lordsSeries, titlesMoviesSeries } = props;
  // console.log(hobbitSerries);
  const [showModal, setIsShowModal] = useState(false);
  const [target, setIsTarget] = useState("");

  function x(title, items) {
    return (
      <>
        <div className="quotes-author title-name">
          <p>{title.name}</p>
        </div>
        <hr className="hr"></hr>
        <div className=" block movies-block hobbit-movies">
          {Object.entries(items).map((movie, index) => (
            <div
              className="userCard movies-block__item"
              index={index}
              onClick={() => [setIsShowModal(true), setIsTarget(movie[1].name)]}
            >
              <p className="movie-item movie-item_title">{movie[1].name}</p>
              <p className="movie-item">
                Run time in minutes: {movie[1].runtimeInMinutes}
              </p>
              <p className="movie-item">
                Budget in millions: {movie[1].budgetInMillions}
              </p>
              <p className="movie-item">
                Academy Award Nominations: {movie[1].academyAwardNominations}
              </p>
              <p className="movie-item">
                Academy Award Wins: {movie[1].academyAwardWins}
              </p>
              <p className="movie-item">
                Box office revenue in millions:
                {movie[1].boxOfficeRevenueInMillions}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {x(titlesMoviesSeries[1], hobbitSerries)}
      <SwipeableTextMobileStepper images={imagesHobbit} className="carousel" />
      {x(titlesMoviesSeries[2], lordsSeries)}
      <SwipeableTextMobileStepper images={imagesLord} className="carousel" />
      {showModal && (
        <MoviecardModal onClose={() => setIsShowModal(false)} target={target} />
      )}
    </>
  );
}

export default MoviesCard;
