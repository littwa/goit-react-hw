import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  // static propTypes = {};

  // static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButtonFeedback = (e) => {
    let computedPropertyName = e.target.dataset.label;
    this.setState((prevState) => {
      return {
        [computedPropertyName]: prevState[computedPropertyName] + 1,
      };
    });
  };

  countTotalFeedback = () => Object.values(this.state).reduce((ac, v) => ac + v);

  countPositiveFeedbackPercentage = () => {
    let countTotal = this.countTotalFeedback();
    return countTotal > 0 ? Math.round((this.state.good / countTotal) * 100) : "";
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{}} onLeaveFeedback={this.clickButtonFeedback} />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
