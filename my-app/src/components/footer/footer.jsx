import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { withTranslator } from "../../hoc/withTranslator";
import { logout } from "../../store/auth/actions";
import LoginPage from "../loginPage/loginPage";
import useWindowSize from "../resources/useWindowSize";
import "./footer.scss";
import Login from "../header/login/login";

function Footer(props) {
  return (
    <footer className="footer">
      <span className="text">alla.matveyeva.job@gmail.com</span>
      {useWindowSize() <= 600 && <Login />}
    </footer>
  );
}
export default withTranslator(Footer);
