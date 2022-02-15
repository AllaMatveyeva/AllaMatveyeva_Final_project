import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";

import Loader from "../../api/loader";

import { login as authLogin, setLoginStatus } from "../../store/auth/actions";
import { LOADING, FAILED } from "../../constants/statuses";

import "./loginPage.scss";
import { withTranslator } from "../../hoc/withTranslator";

const LoginPage = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const account = useSelector((state) => state.auth.account);
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  const loading = loginStatus === LOADING;
  const error = loginStatus === FAILED;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!!account) {
      navigate("/");
    }
  }, [account, navigate]);

  const handleInput = (setFunction) => (e) => {
    dispatch(setLoginStatus(null));
    setFunction(e.currentTarget.value);
  };

  const handleSubmit = () => {
    dispatch(authLogin(login, password));
  };

  return (
    <div className="login-page">
      <Card className="users-page-card">
        <CardHeader title={props.translate("loginPage.title")} />
        <CardContent>
          <TextField
            className="text-field"
            value={login}
            onChange={handleInput(setLogin)}
            error={!!error}
            fullWidth
            label={props.translate("loginPage.login")}
            placeholder={props.translate("loginPage.inputName")}
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={handleInput(setPassword)}
            error={!!error}
            className="text-field"
            fullWidth
            type="password"
            placeholder={props.translate("loginPage.inputPassword")}
            label={props.translate("loginPage.password")}
            variant="outlined"
          />

          <Button
            className="button-login"
            onClick={handleSubmit}
            endIcon={loading ? <Loader /> : undefined}
            disabled={loading || !!error}
          >
            {props.translate("loginPage.button")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default withTranslator(LoginPage);
