import { useState } from 'react';
import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = button => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onButtonClick}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          !!countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no given feedback" />
          )
        }
      />
    </>
  );
};

export default App;
