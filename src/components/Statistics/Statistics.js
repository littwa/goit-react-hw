import React from "react";
import PropTypes from "prop-types";

let Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default Statistics;
