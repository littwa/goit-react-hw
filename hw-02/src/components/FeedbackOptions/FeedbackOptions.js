import React from "react";
import PropTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

let FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={style.feedback}>
      <button data-label="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button data-label="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button data-label="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
