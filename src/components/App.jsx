import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { FeedbackContainer, FeedbackTitle } from './FeedStyled.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalStats = () => this.state.good + this.state.neutral + this.state.bad;

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <FeedbackContainer>
        <FeedbackTitle>Please leave FeedBack</FeedbackTitle>
        <FeedbackOptions
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad}
        />

        {this.totalStats() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification />
        )}
      </FeedbackContainer>
    );
  }
}
export default App;
