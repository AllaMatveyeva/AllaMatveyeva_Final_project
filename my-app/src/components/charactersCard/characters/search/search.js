import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./search.scss";
import { useState, useEffect } from "react";
import RadioButtonsGroup from "./radioButtons/radioButtons";

export default function CustomizedInputBase() {
  const [click, setClick] = useState(false);

  function Search() {
    return (
      <Paper
        className="form"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 250 }}
      >
        <RadioButtonsGroup />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search characters"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }

  return (
    <div className="wrap">
      {!click && (
        <button
          className="search"
          onClick={() => {
            setClick(true);
          }}
        >
          <SearchIcon />
        </button>
      )}
      {click && <Search setClick={setClick} click={click}></Search>}
    </div>
  );
}
