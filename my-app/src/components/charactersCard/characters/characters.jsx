import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharactersCard from "../charactersCard";
import Loader from "../../../api/loader";
import { fetchCharacters } from "../../../store/characters/actions";
import { withTranslator } from "../../../hoc/withTranslator";
import UsePagination from "../../../pagination/pagination";
import { ERROR429, FAILED, LOADING } from "../../../constants/statuses";

import "./characters.scss";
import CustomizedInputBase from "./search/customizedInputBase";

function Characters(props) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const fetchCharacterStatus = useSelector(
    (state) => state.characters.fetchCharacterStatus
  );
  const isLoading = fetchCharacterStatus === LOADING;
  const isError = fetchCharacterStatus === FAILED;
  const isError429 = fetchCharacterStatus === ERROR429;

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = UsePagination({
    contentPerPage: 10,
    count: characters.length,
  });

  useEffect(() => {
    dispatch(fetchCharacters(`${props.letter}`));
    console.log(characters);
  }, [`${props.letter}`]);

  return (
    <>
      {isLoading && <Loader />}
      {isError429 && "Too many requests, please try again later."}
      {isError && "Error"}
      {!isLoading && !isError && characters.length === 0 ? (
        <span className="home__welcome home__welcome__text">
          {props.translate("not.letter")}
        </span>
      ) : (
        <>
          <ul className="users-block">
            {characters
              .slice(firstContentIndex, lastContentIndex)
              .map((user, index) => (
                <CharactersCard key={user._id} user={user} index={index} />
              ))}
          </ul>
          <div className="pagination">
            <button
              onClick={prevPage}
              className={`page ${page === 1 && "disabled"}`}
            >
              &larr;
            </button>

            {[...Array(totalPages).keys()].map((el) => (
              <button
                onClick={() => setPage(el + 1)}
                key={el}
                className={`page ${page === el + 1 ? "active-page" : ""}`}
              >
                {el + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              className={`page ${page === totalPages && "disabled"}`}
            >
              &rarr;
            </button>
          </div>
          <CustomizedInputBase />
        </>
      )}
    </>
  );
}
export default withTranslator(Characters);
