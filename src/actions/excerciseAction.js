import axios from "axios";
import {
  FETCH_EXERCISES_REQUEST,
  FETCH_EXERCISES_SUCCESS,
  FETCH_EXERCISES_FAILURE,
  EVALUATE_ANSWER_REQUEST,
  EVALUATE_ANSWER_SUCCESS,
  EVALUATE_ANSWER_FAILURE,
} from "../constant/exerciseConstants";
const host = process.env.REACT_APP_API_URL;

export const fetchExercises = (language) => async (dispatch) => {
  dispatch({ type: FETCH_EXERCISES_REQUEST });

  try {
    const response = await axios.get(
      `${host}/api/exercises/lang/?language=${language}`
    );
    const exercises = response.data;

    // Selecting 10 questions from the available 15
    const selectedExercises = exercises
      .slice(0, 10)
      .sort((a, b) => a.difficulty - b.difficulty);

    dispatch({ type: FETCH_EXERCISES_SUCCESS, payload: selectedExercises });
  } catch (error) {
    dispatch({ type: FETCH_EXERCISES_FAILURE, payload: error.message });
  }
};
let score = 0;

export const evaluateAnswer =
  (answerData, quesId, difficulty) => async (dispatch) => {
    dispatch({ type: EVALUATE_ANSWER_REQUEST });
    console.log(answerData, quesId, difficulty);
    try {
      const response = await axios.post(
        `${host}/api/exercises/evaluate-answer`,
        { userAnswer: answerData, exerciseId: quesId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const evaluationResult = response.data;
      console.log(evaluationResult);
      // Evaluate scores based on the answer and difficulty level

      if (difficulty === 1 && evaluationResult.isCorrect) {
        score += 1;
      } else if (difficulty === 2 && evaluationResult.isCorrect) {
        score += 3;
      } else if (difficulty === 3 && evaluationResult.isCorrect) {
        score += 5;
      }

      //   // Adjust difficulty based on user performance
      //   if (score < 3) {
      //     // User struggled, so provide easier questions
      //     // Logic to fetch easier questions here...
      //   } else {
      //     // User performed well, so provide harder questions
      //     // Logic to fetch harder questions here...
      //   }

      //   // Normalize score to range from 0 to 5
      //   const normalizedScore = Math.min(Math.max(score, 0), 5);
      console.log(score);
      dispatch({ type: EVALUATE_ANSWER_SUCCESS, payload: score });
    } catch (error) {
      dispatch({ type: EVALUATE_ANSWER_FAILURE, payload: error.message });
    }
  };
