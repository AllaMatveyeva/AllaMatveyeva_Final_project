import React, { useState } from "react";
import Characters from "../characters/characters";
import { withTranslator } from "../../../hoc/withTranslator";
import helper from "../../../img/Gandalf.jpeg";
import "./alphabet.scss";

import { withAuth } from "../../../hoc/withAuth";

const Alphabet = (props) => {
  const [letter, setLetter] = useState(localStorage.getItem("letter") || "");

  function makeAlphabet() {
    let a = "a".codePointAt(0);
    let z = "z".codePointAt(0);
    let arrLetter = [];
    let summ;
    while (summ !== z) {
      summ = a;
      arrLetter.push(summ);
      a++;
    }
    return arrLetter.map((item) => String.fromCodePoint(item));
  }

  function getLetter(e) {
    setLetter(e.innerText);
    localStorage.setItem("letter", e.innerText);
  }

  return (
    <>
      <div className="alphabet-block" onClick={(e) => getLetter(e.target)}>
        {makeAlphabet().map((item, index) => (
          <button
            type="button"
            className={`alphabet-block__letter ${
              item.toUpperCase() === letter ? "actives" : ""
            }`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>

      {
        <>
          {letter ? (
            <Characters letter={letter}></Characters>
          ) : (
            <div className="change-letter">
              <img
                className="change-letter__item helper"
                src={helper}
                alt="helper"
              ></img>
              <span className="change-letter__item helper__text">
                {props.translate("characters.text.greet")}
              </span>
            </div>
          )}
        </>
      }
    </>
  );
};
export default withAuth(withTranslator(Alphabet));
