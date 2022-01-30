import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useState } from "react";

import RadioButtonsGroup from "./radioButtons/radioButtons";
import { withTranslator } from "../../../../hoc/withTranslator";
import "./customizedInputBase.scss";

function SearchValue(props) {
  const [option, setOption] = useState("name");
  const [value, setValue] = useState("");
  const characters = useSelector((state) => state.characters.characters);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value === "") {
      event.preventDefault();
    }
    return localStorage.setItem("characters", JSON.stringify(characters));
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
        placeholder={props.translate("search.characters")}
        inputProps={{ "aria-label": "search characters" }}
        value={value}
        onChange={handleChange}
      />
      <IconButton
        className="link"
        type="submit"
        sx={{ p: "10px", width: "15px" }}
        aria-label="search characters"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default withTranslator(SearchValue);
