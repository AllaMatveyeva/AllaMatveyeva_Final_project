import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { withTranslator } from "../../hoc/withTranslator";
import MenuSmall from "../menuSmall/menuSmall";
import "./menu.scss";

function Menu(props) {
  const screenWidth = window.screen.width;
  // const [size, setSize] = useState("big");
  const links = [
    { textId: props.translate("menu.button.characters"), id: "/alphabet" },
    { textId: props.translate("menu.button.books"), id: "/books" },
    { textId: props.translate("menu.button.movie"), id: "/movies" },
  ];

  // useEffect(() => {
  //   if (screenWidth <= 950) {
  //     setSize("small");
  //   }
  // }, [screenWidth]);

  return (
    <>
      {screenWidth >= 950 ? (
        <div className="menu__buttons">
          {links.map((link, index) => (
            <button key={index} className="menu__button">
              <NavLink to={link.id} className="link">
                {link.textId}
              </NavLink>
            </button>
          ))}
        </div>
      ) : (
        <MenuSmall links={links} />
      )}
    </>
  );
}
export default withTranslator(Menu);
