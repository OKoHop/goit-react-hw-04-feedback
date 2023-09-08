import { Button } from './FeedbackOpt.style';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};
