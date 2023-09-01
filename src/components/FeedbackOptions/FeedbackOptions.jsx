import PropTypes from 'prop-types';
import { ButtonsList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButton
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
