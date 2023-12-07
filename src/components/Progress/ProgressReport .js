import React from 'react';

const ProgressReport = ({ language, score }) => {
  // Calculate the percentage based on the score (assuming score is in the range of 0-5)
  const percentage = (score / 5) * 100;

  return (
    <div className="progress-report-container">
      <h3>{language} Progress Report</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
      <p>Score: {score}/5</p>
    </div>
  );
};

export default ProgressReport;
