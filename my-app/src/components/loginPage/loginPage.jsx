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
import authApi from "../../api/authApi";
import { login as authLogin, setLoginStatus } from "../../store/auth/actions";
import { LOADING, FAILED } from "../../constants/statuses";

import "./loginPage.scss";
import { withMe } from "../../hoc/withMe";

const LoginPage = () => {
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
  }, [account]);

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
        <CardHeader title={"Login"} />
        <CardContent>
          {/* {error && <span>{error}</span>} */}
          <TextField
            className="text-field"
            value={login}
            onChange={handleInput(setLogin)}
            error={!!error}
            fullWidth
            label="Login"
            placeholder="Input name"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={handleInput(setPassword)}
            error={!!error}
            className="text-field"
            fullWidth
            type="password"
            placeholder="Input password"
            label="Password"
            variant="outlined"
          />

          <Button
            className="button-login"
            onClick={handleSubmit}
            endIcon={loading ? <Loader /> : undefined}
            disabled={loading || !!error}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
