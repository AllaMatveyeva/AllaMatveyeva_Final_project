import React, { useEffect, useState } from "react";

import CharactersCard from "../charactersCard";
import "./characters.scss";

import { getComers } from "../../../api/api";

import Loader from "../../../api/loader";

function Characters(props) {
  const [characters, setcharacters] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props.letter);
    async function fetchData() {
      try {
        const response = await getComers(`${props.letter}`);
        setcharacters(response.data.docs);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [props.letter]);

  return (
    <>
      <ul className="users-block">
        {isLoading && <Loader />}
        {isError && "Error"}
        {!isLoading &&
          !isError &&
          characters.map((user, index) => (
            <CharactersCard key={user._id} user={user} index={index} />
          ))}
      </ul>
    </>
  );
}

export default Characters;
