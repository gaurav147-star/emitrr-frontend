import React, { useState } from "react";
import QuizForm from "../../pages/QuizForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../../actions/excerciseAction";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const ChooseLang = () => {
  const languages = ["English", "French", "Chinese"];
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const dispatch = useDispatch();
  const ques = useSelector((state) => state.exercise.exercises);
  const { loading, error } = useSelector((state) => state.exercise);
  // console.log(ques);
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    dispatch(fetchExercises(language)); // Dispatching the action to fetch exercises for the selected language
  };
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    setSelectedLanguage(null);
  };

  return (
    <>
      {!selectedLanguage && (
        <div className="language-container">
          {languages.map((language, index) => (
            <div
              key={index}
              className="language-box"
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
      {!loading
        ? selectedLanguage &&
          // <QuizForm
          //   selectedLanguage={selectedLanguage}
          //   questions={ques}
          //   onBackButtonClick={handleBackButtonClick}
          // />
          navigate("/exercise")
        : (<Loader/>)}
    </>
  );
};

export default ChooseLang;
