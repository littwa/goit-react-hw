import React from "react";
import PropTypes from "prop-types";

let Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  title: PropTypes.string,
};

Notification.defaultProps = {
  message: "No feedback",
};

export default Notification;
