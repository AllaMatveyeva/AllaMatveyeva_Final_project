import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/actions";
import { withTheme } from "../../hoc/theme";

import { withTranslator } from "../../hoc/withTranslator";

import Logotype from "../../img/logotype.png";
import "./header.scss";

function Header(props) {
  const languageStorige = (lang) => {
    localStorage.setItem("lang", lang);
  };
  console.log(props);

  const dispatch = useDispatch();
  const account = useSelector((state) => state.auth.account);

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
          {!!account ? (
            <button
              className="login button-translate"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          ) : (
            <NavLink className="login button-translate" to="/login">
              Login
            </NavLink>
          )}
          {!!account && (
            <span className="buttons-help__item login user-name">
              User: {account.login}
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
export default withTheme(withTranslator(Header));
