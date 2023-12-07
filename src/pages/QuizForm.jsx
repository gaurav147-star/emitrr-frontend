// QuizForm.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { evaluateAnswer } from "../actions/excerciseAction";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updateProgress } from "../actions/progressAction";
import Loader from "../components/Loader";

const QuizForm = ({ selectedLanguage }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exercise);
  const questions = exercise.exercises;
  const { loading, error } = useSelector((state) => state.exercise);

  const user_id = useSelector((state)=>state.auth.user.id)
  console.log(user_id)

  const [score, setScore] = useState(0);
  const quesNum = questions.length;
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // console.log(questions[currentQuestion]);
    dispatch(
      evaluateAnswer(
        option,
        questions[currentQuestion]._id,
        questions[currentQuestion].difficulty
      )
    );
  };
  // console.log(selectedOption);
  const handleSubmit = () => {
    // console.log(selectedOption);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
    }
    if (currentQuestionIndex < quesNum - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const navigate = useNavigate();

  
  const handleCancel = () => {
    navigate("/");
  };
  
  const handleSubmitTest = () => {
    // console.log(exercise);
    let score = exercise.evaluationResult;
    score = score?score:0
    const lang = exercise.exercises[0].language;
    const record = [{score,lang}];
    dispatch(updateProgress(user_id,record))
    navigate("/result");
  };

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <Container>
          <div className="quizButton">
            <button className="submit-button" onClick={handleCancel}>
              Cancel Test
            </button>
            <button className="submit-button" onClick={handleSubmitTest}>
              Submit Test
            </button>
          </div>
          <div className="quiz-container">
            <span>{currentQuestionIndex + 1}/10</span>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="submit-container">
              {/* <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button> */}
              <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={currentQuestionIndex === quesNum - 1}
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default QuizForm;
