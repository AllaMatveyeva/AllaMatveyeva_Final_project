import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import "./translate.scss";
import { withTranslator } from "../../hoc/withTranslator";

function Translate(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const languageStorige = (lang) => {
    localStorage.setItem("lang", lang);
  };

  return (
    <div>
      <Button
        className="menu-list translate"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.translate("translate.lang")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="translate-list" onClick={handleClose}>
          <span
            className="button-translate"
            onClick={() => {
              props.setLanguage("ru");
              languageStorige("ru");
            }}
          >
            {props.translate("button.ru")}
          </span>
          <span
            className="button-translate"
            onClick={() => {
              props.setLanguage("en");
              languageStorige("en");
            }}
          >
            {props.translate("button.en")}
          </span>
        </div>
      </Menu>
    </div>
  );
}

export default withTranslator(Translate);
