import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharactersCard from "../charactersCard";
import { getComers } from "../../../api/api";
import Loader from "../../../api/loader";
import { changeCharacters } from "../../../store/characters/actions";
import { response } from "msw";
import { withTranslator } from "../../../hoc/withTranslator";
import UsePagination from "../../../pagination/pagination";

import "./characters.scss";

function Characters(props) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);

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
    async function fetchData() {
      try {
        const response = await getComers(`${props.letter}`);
        dispatch(changeCharacters(response.data.docs));
      } catch (e) {
        if (response.status === "429") {
          setIsError("429");
        } else {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [props.letter]);

  return (
    <>
      {isLoading && <Loader />}
      {isError === "429" && "Too many requests, please try again later."}
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
        </>
      )}
    </>
  );
}
export default withTranslator(Characters);
