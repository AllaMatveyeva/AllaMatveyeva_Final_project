import * as React from "react";

import SearchIcon from "@mui/icons-material/Search";

import "./customizedInputBase.scss";
import { useState } from "react";

import store from "../../../../store/store";

import SearchValue from "./search";

export default function CustomizedInputBase(props) {
  const [open, setOpen] = useState(false);
  console.log(store.getState().characters);
  window.addEventListener("click", (e) => {
    e.target.closest(".wrap") || e.target.closest(".search-svg")
      ? setOpen(true)
      : setOpen(false);
  });
  console.log(props.value);

  return (
    <div className="wrap">
      {!open ? (
        <button className="search">
          <SearchIcon className="search-svg" />
        </button>
      ) : (
        <SearchValue></SearchValue>
      )}
    </div>
  );
}
