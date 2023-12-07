import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import QuizForm from "./QuizForm";
import ChooseLang from "../components/Home/ChooseLang";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Container maxWidth="xl" sx={{ margin: "0%" }}>
        {/* <QuizForm/> */}
        <ChooseLang />
      </Container>
    </div>
  );
};

export default Home;
