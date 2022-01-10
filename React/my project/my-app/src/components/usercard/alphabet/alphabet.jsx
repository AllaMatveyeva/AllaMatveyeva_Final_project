import React, { useState } from "react";
import Users from "../users/users";
import { withTranslator } from "../../../hoc/withTranslator";
import helper from "../../../img/Gandalf.jpeg";
import "./alphabet.scss";

function Alphabet(props) {
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
    setLetter(e.target.innerText);
    localStorage.setItem("letter", e.target.innerText);
  }

  return (
    <>
      <div className="alphabet-block" onClick={(e) => getLetter(e)}>
        {makeAlphabet().map((item, index) => (
          <button type="button" className="alphabet-block__letter" key={index}>
            {item}
          </button>
        ))}
      </div>

      {
        <>
          {letter ? (
            <Users letter={letter}></Users>
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
}
export default withTranslator(Alphabet);
