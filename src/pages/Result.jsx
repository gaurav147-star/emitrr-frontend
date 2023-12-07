import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import happy from "../assets/happy.png";
import sad from "../assets/sad.png";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const exercise = useSelector((state) => state.exercise);
  const score = exercise.evaluationResult;
  const language = exercise.exercises[0].language;
  // console.log(exercise);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <CloseIcon
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      <Container component="main" maxWidth="xs" style={{ marginTop: "5%" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "10%" }}
        >
          Feedback
        </Typography>
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={score > 5 ? happy : sad}
              alt="green iguana"
              style={{ objectFit: "contain", margin: "5% 0%" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Score : {score?score:0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Language : {language}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}
