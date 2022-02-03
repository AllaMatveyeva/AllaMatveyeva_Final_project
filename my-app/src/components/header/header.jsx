import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { NavLink } from "react-router-dom";
import { withTheme } from "../../hoc/theme";
import { withTranslator } from "../../hoc/withTranslator";
import Logotype from "../../img/logotype.png";
import "./header.scss";
import Translate from "./translate";
import Login from "./login/login";
import useWindowSize from "../resources/useWindowSize";
import CustomizedInputBase from "../charactersCard/characters/search/customizedInputBase";

function Header(props) {
  return (
    <header className="header">
      <div className="header-item__img">
        <img src={Logotype} className="logotype" alt="logo"></img>
      </div>

      <button className="header-item__home header__button">
        <NavLink className="home" to="/">
          {props.translate("header.links.home")}
        </NavLink>
      </button>

      <Translate className="header__button" />
      {useWindowSize() > 600 && <Login />}
      <CustomizedInputBase />
      <LightModeOutlinedIcon
        className="header__button ligth-svg"
        onClick={() => props.toggleTheme()}
      />
    </header>
  );
}
export default withTheme(withTranslator(Header));
