import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./radioButtons.scss";
import store from "../../../../../store/store";
export default function RadioButtonsGroup(props) {
  const onChangeValue = (e) => {
    props.setOption(e.target.value);
  };
  const charactersFromStore = store.getState().characters;
  console.log(charactersFromStore.characters);

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Option</FormLabel>
      <RadioGroup
        onChange={onChangeValue}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="name"
        name="radio-buttons-group"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 15,
          },
        }}
      >
        <FormControlLabel
          value="name"
          control={<Radio />}
          label="Name"
          sx={{
            paddingBottom: 0,
          }}
        />
        <FormControlLabel value="race" control={<Radio />} label="Race" />
      </RadioGroup>
    </FormControl>
  );
}
