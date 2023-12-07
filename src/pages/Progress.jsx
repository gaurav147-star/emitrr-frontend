import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import ProgressReport from "../components/Progress/ProgressReport ";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgress } from "../actions/progressAction";
const Progress = () => {

  const dispatch = useDispatch();
  
  const userId = useSelector((state)=>state.auth.user.id)
  useEffect(() => {
    dispatch(fetchProgress(userId))
  }, [dispatch,userId])
  
  const data = useSelector((state)=>state.progress.data);

  const userProgress = data ? data[0].record : [];

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
      <h1> Your Progress Report</h1>
        <div className="pr-container">
          {userProgress.map((progress, index) => (
            <ProgressReport
              key={index}
              language={progress.lang}
              score={progress.score}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Progress;
