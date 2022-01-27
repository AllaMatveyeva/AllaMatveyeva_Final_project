import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./charactersCardModal.scss";

import ModalWindow from "../../modalWindow/modal";

import female1 from "../../../img/female1.jpg";
import female2 from "../../../img/female2.jpg";
import female3 from "../../../img/female3.jpg";
import male1 from "../../../img/male1.jpg";
import male2 from "../../../img/male2.jpg";
import male3 from "../../../img/male3.jpg";

function CharactersCardModal(props) {
  const { user, index, onClose } = props;
  let key = user._id;
  console.log(user);

  localStorage.setItem(`character_${key}`, user.name);

  const [length, setLength] = useState("");

  function GetImg(index) {
    const arrImg = [];
    arrImg.push(female1, male1, male2, male3, female2, female3);

    return <img className="image" src={arrImg[index.index]} alt="Avatar"></img>;
  }

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
          <a className="link" href={user.wikiUrl}>
            User profile
          </a>
        )}
        <div className="user-img" data-testid="modal">
          <GetImg index={index} />
        </div>
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
