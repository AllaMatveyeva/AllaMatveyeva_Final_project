import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { withTheme } from "../../hoc/theme";
import { withTranslator } from "../../hoc/withTranslator";

import Logotype from "../../img/logotype.png";
import "./header.scss";

function Header(props) {
  const languageStorige = (lang) => {
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="header">
      <div className="header-item">
        <img src={Logotype} className="logotype" alt="logo"></img>
      </div>
      <div className="header-item header-item__link">
        <button className="header__button-link">
          <a className="link" href="/">
            {props.translate("header.links.home")}
          </a>
        </button>
      </div>
      <div className="buttons-translate">
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
      <LightModeOutlinedIcon
        className="ligth-svg"
        onClick={() => props.toggleTheme()}
      />
    </header>
  );
}
export default withTheme(withTranslator(Header));
