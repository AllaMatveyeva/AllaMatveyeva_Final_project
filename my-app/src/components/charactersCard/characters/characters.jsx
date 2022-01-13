import React, { useEffect, useState } from "react";

import CharactersCard from "../charactersCard";
import "./characters.scss";

import { getComers } from "../../../api/api";

import Loader from "../../../api/loader";
import { useDispatch, useSelector } from "react-redux";
import { changeCharacters } from "../../../store/characters/actions";
import store from "../../../store/store";
import { response } from "msw";
import { withTranslator } from "../../../hoc/withTranslator";

function Characters(props) {
  // const [characters, setcharacters] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);

  useEffect(() => {
    console.log(props.letter);
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

    //Too many requests, please try again later.
    fetchData();
  }, [props.letter]);
  console.log(characters);
  return (
    <>
      <ul className="users-block">
        {isLoading && <Loader />}
        {isError === "429" && "Too many requests, please try again later."}
        {isError && "Error"}
        {!isLoading && !isError && characters.length === 0 ? (
          <span className="home__welcome home__welcome__text">
            {props.translate("not.letter")}
          </span>
        ) : (
          characters.map((user, index) => (
            <CharactersCard key={user._id} user={user} index={index} />
          ))
        )}
      </ul>
    </>
  );
}

export default withTranslator(Characters);
