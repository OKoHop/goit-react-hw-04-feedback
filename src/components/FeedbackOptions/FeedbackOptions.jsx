import { Button } from './FeedbackOpt.style';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <>
      <Button type="button" onClick={good}>
        Good
      </Button>
      <Button onClick={neutral}>Neutral</Button>
      <Button onClick={bad}>Bad</Button>
    </>
  );
};
