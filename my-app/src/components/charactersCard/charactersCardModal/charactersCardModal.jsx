import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./charactersCardModal.scss";

import ModalWindow from "../../modalWindow/modal";
import AvatarCharacters from "./avatar/avatar";

function CharactersCardModal(props) {
  const { user, onClose } = props;

  let key = user._id;

  localStorage.setItem(`character_${key}`, user.name);

  const [length, setLength] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        fetch(`https://the-one-api.dev/v2/character/${user._id}/quote`, {
          headers: {
            Authorization: "Bearer VE3TQswW4reG5Luwm85f",
          },
        }).then((res) => res.json().then((res) => setLength(+res.docs.length)));
      } catch (e) {
        console.error();
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ModalWindow title={`${user.name}`} onClose={onClose}>
        {!user.wikiUrl &&
          (user.birth === "NaN" || user.birth === "") &&
          (user.death === "NaN" || user.death === "") && (
            <div className="user__no-data">
              This character has no additional data!
            </div>
          )}
        {user.wikiUrl && (
          <a className="link modal-link" href={user.wikiUrl}>
            User profile
          </a>
        )}

        <AvatarCharacters id={key} />

        {!(user.birth === "NaN" || user.birth === "") && (
          <div className="user-birth">Birth: {user.birth}</div>
        )}
        {!(user.death === "NaN" || user.death === "") && (
          <div className="user-death">Death: {user.death}</div>
        )}
        <>
          {length > 0 ? (
            <Link className="quote-link" to={`/characters/${user._id}/quotes`}>
              Quotes
            </Link>
          ) : (
            ""
          )}
        </>
      </ModalWindow>
    </>
  );
}

export default CharactersCardModal;
