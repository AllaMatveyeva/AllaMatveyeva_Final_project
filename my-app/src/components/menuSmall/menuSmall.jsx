import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "./menuSmall.scss";
import { withTranslator } from "../../hoc/withTranslator";

function MenuSmall(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="menu-list"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.translate("menu.small")}
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
        {props.links.map((link, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <NavLink to={link.id} className="link">
              {link.textId}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default withTranslator(MenuSmall);
