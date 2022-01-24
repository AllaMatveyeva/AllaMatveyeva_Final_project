import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./radioButtons.scss";
export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Option</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 15,
          },
        }}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Name"
          sx={{
            paddingBottom: 0,
          }}
        />
        <FormControlLabel value="male" control={<Radio />} label="Race" />
      </RadioGroup>
    </FormControl>
  );
}
