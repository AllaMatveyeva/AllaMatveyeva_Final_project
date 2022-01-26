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
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import store from "../../../../store/store";
import { useSelector } from "react-redux";

export default function CustomizedInputBase(props) {
  const [open, setOpen] = useState(false);
  console.log(store.getState().characters);
  window.addEventListener("click", (e) => {
    e.target.closest(".wrap") || e.target.closest(".search-svg")
      ? setOpen(true)
      : setOpen(false);
  });
  console.log(props.value);
  function Search(props) {
    const [option, setOption] = useState("name");
    const [value, setValue] = useState("");
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const characters = useSelector((state) => state.characters.characters);
    const handleSubmit = (event) => {
      return localStorage.setItem("characters", JSON.stringify(characters));

      //event.preventDefault();
    };
    return (
      <Paper
        onSubmit={handleSubmit}
        action={`/filtr/${option}/${value}`}
        className="form"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 250 }}
      >
        <RadioButtonsGroup setOption={setOption} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search characters"
          inputProps={{ "aria-label": "search characters" }}
          value={value}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search characters"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }

  return (
    <div className="wrap">
      {!open ? (
        <button className="search">
          <SearchIcon className="search-svg" />
        </button>
      ) : (
        <Search></Search>
      )}
    </div>
  );
}
