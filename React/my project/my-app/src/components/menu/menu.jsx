import { NavLink } from "react-router-dom";

import { withTranslator } from "../../hoc/withTranslator";
import "./menu.scss";

function Menu(props) {
  const links = [
    { textId: props.translate("menu.button.characters"), id: "/alphabet" },
    { textId: props.translate("menu.button.books"), id: "/books" },
    { textId: props.translate("menu.button.movie"), id: "/movies" },
  ];

  return (
    <div className="menu__buttons">
      {links.map((link, index) => (
        <button key={index} className="menu__button">
          <NavLink to={link.id} className="link">
            {link.textId}
          </NavLink>
        </button>
      ))}
    </div>
  );
}
export default withTranslator(Menu);
