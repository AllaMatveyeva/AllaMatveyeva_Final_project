import * as React from "react";

import SearchIcon from "@mui/icons-material/Search";

import "./customizedInputBase.scss";
import { useState } from "react";

import SearchValue from "./search";

export default function CustomizedInputBase(props) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    function fetchData() {
      function searchClose(e) {
        e.target.closest(".wrap") || e.target.closest(".search-svg")
          ? setOpen(true)
          : setOpen(false);
      }
      window.addEventListener("click", (e) => {
        searchClose(e);
      });
      return window.removeEventListener("click", (e) => {
        searchClose(e);
      });
    }

    fetchData();
  }, []);

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
