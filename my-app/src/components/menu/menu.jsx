import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { withTranslator } from "../../hoc/withTranslator";
import MenuSmall from "../menuSmall/menuSmall";
import "./menu.scss";

function Menu(props) {
  const [size, setSize] = useState(0);
  const links = [
    { textId: props.translate("menu.button.characters"), id: "/alphabet" },
    { textId: props.translate("menu.button.books"), id: "/books" },
    { textId: props.translate("menu.button.movie"), id: "/movies" },
  ];

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.screen.width);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  useWindowSize();

  return (
    <>
      {size > 960 ? (
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
