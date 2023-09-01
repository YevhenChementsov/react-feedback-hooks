import { useState } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <h1 hidden>Feedback</h1>
      <Section title="Leave us feedback, please! It's very important for us.">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given...yet ;-)" />
        )}
      </Section>
    </Container>
  );
};
