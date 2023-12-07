import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLogin", true);
    dispatch(loginUser({ email, password }));

    if (checked) {

      localStorage.setItem("rememberMe", JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem("rememberMe");
    }

    navigate("/");
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const rememberMeData = JSON.parse(localStorage.getItem("rememberMe"));
    if (rememberMeData && rememberMeData.email && rememberMeData.password) {
      setEmail(rememberMeData.email);
      setPassword(rememberMeData.password);
      setChecked(true);
    }
  }, []);

  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Paper elevation={3} style={{ padding: "5%" }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name="rememberMe"
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </form>
          <Typography style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account?{" "}
            <span
              onClick={handleSignupClick}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Signup
            </span>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
