import React from "react";
import PropTypes from "prop-types";

let Section = ({ children, title }) => {
  // console.log(args);
  // let { title } = args;
  return (
    <section>
      {{ title } && <h2>Please leave feedback</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
