import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { NotificationMsg } from '../NotificationMsg/NotificationMsg';
import { Div } from './FeedbackPage.styled';
import { Section } from '../Section/Section';

const FeebbackPage = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    let total = bad + good + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePecent = good / countTotalFeedback();
    return Math.round(positivePecent * 100);
  };

  const updateStatistics = btnName => {
    switch (btnName) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;
      default:
        console.log(btnName);
    }
  };

  return (
    <Div>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={updateStatistics}
        />
      </Section>
      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMsg message="There is no feedback" />
        )}
      </Section>
    </Div>
  );
};

export default FeebbackPage;
