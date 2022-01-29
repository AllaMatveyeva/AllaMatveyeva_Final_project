import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { withTranslator } from "../../../hoc/withTranslator";
import { logout } from "../../../store/auth/actions";

function Login(props) {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.auth.account);

  return (
    <div className="header-item__login">
      {!!account ? (
        <button
          className="login header__button"
          onClick={() => dispatch(logout())}
        >
          {props.translate("header.logout")}
        </button>
      ) : (
        <NavLink className="login header__button" to="/login">
          {props.translate("header.login")}
        </NavLink>
      )}
      {!!account && (
        <span className="login  user-name ">
          {props.translate("header.user")}: {account.login}
        </span>
      )}
    </div>
  );
}
export default withTranslator(Login);
