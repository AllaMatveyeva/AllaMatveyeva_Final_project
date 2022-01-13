import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CharactersCardModal from "./charactersCardModal/charactersCardModal";
import "./charactersCard.scss";
import { withMe } from "../../hoc/withMe";

import { connect } from "react-redux";

function CharactersCard(props) {
  const { user, index } = props;

  const { id } = useParams();
  const [showModal, setIsShowModal] = useState(false);

  return (
    <>
      <li className="userCard" onClick={() => setIsShowModal(true)}>
        {user.name && (
          <p className="userCard__title name">
            <span className="title_name">name: {user.name}</span>
          </p>
        )}
        {!(user.race === "NaN" || user.race === "") && (
          <p className="userCard__title race">
            <span className="title_name">race: {user.race}</span>
          </p>
        )}
        {!(user.gender === "NaN" || user.gender === "") && (
          <p className="userCard__title gender">
            <span className="title_name">gender: {user.gender}</span>
          </p>
        )}
      </li>

      {showModal && (
        <CharactersCardModal
          user={user}
          index={index}
          onClose={() => setIsShowModal(false)}
          id={id}
        />
      )}
    </>
  );
}

export default CharactersCard;
