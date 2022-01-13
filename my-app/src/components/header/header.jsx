import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { NavLink } from "react-router-dom";
import { withTheme } from "../../hoc/theme";
import { withMe } from "../../hoc/withMe";
import { withTranslator } from "../../hoc/withTranslator";

import Logotype from "../../img/logotype.png";
import "./header.scss";

function Header(props) {
  const languageStorige = (lang) => {
    localStorage.setItem("lang", lang);
  };
  console.log(props);

  return (
    <header className="header">
      <div className="header-item">
        <img src={Logotype} className="logotype" alt="logo"></img>
      </div>
      <div className=" header-item__link">
        <button className="header__button-link">
          <NavLink className="link" to="/">
            {props.translate("header.links.home")}
          </NavLink>
        </button>
      </div>
      <div className="buttons-help">
        <div className="buttons-help__item buttons-translate">
          <button
            className="button-translate"
            onClick={() => {
              props.setLanguage("ru");
              languageStorige("ru");
            }}
          >
            {props.translate("button.ru")}
          </button>
          <button
            className="button-translate"
            onClick={() => {
              props.setLanguage("en");
              languageStorige("en");
            }}
          >
            {props.translate("button.en")}
          </button>
        </div>
        <div className="buttons-help__item ">
          {props.me ? (
            <button
              className="login button-translate"
              onClick={() => props.setMe(null)}
            >
              Logout
            </button>
          ) : (
            <NavLink className="login button-translate" to="/login">
              Login
            </NavLink>
          )}
          {props.me && (
            <span className="buttons-help__item login user-name">
              User: {props.me.login}
            </span>
          )}
        </div>
        <LightModeOutlinedIcon
          className="buttons-help__item ligth-svg"
          onClick={() => props.toggleTheme()}
        />
      </div>
    </header>
  );
}
export default withMe(withTheme(withTranslator(Header)));
