import { ButtonList, Button } from './RateButtons.styled';
import { PropTypes } from 'prop-types';

export const RateButtons = ({ options, onFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button type="button" onClick={() => onFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};

RateButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};