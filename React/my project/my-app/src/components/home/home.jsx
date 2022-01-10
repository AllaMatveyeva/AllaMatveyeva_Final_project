import { useEffect } from "react";
import { withTranslator } from "../../hoc/withTranslator";

import "./home.scss";

function Home(props) {
  useEffect(() => {
    localStorage.removeItem("letter");
  });

  return (
    <>
      <div className="home__welcome">
        <p className="home__welcome__text">
          {props.translate("home.text.greet")}
        </p>
      </div>
    </>
  );
}
export default withTranslator(Home);
