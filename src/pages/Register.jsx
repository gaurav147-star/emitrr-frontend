import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // Your signup logic here
    navigate("/login");
    // console.log('Redirect to signup or show signup modal');
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(signupUser({ name, email, password }));
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      <Paper elevation={3} style={{ padding: "5%" }}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
        <Typography style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            onClick={handleLoginClick}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Login
          </span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
