// vendors
import React from 'react';
// constants
import { RATING, SUBMIT } from './ratingButton.constants';
// styles
import { RoundedButton, SubmitButton } from './ratingButton.styled';

// types
type Props = {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  text: string;
  buttonType: typeof RATING | typeof SUBMIT;
};

const RatingButton = (props: Props): React.ReactElement => {
  const { text, buttonType } = props;

  if (buttonType === SUBMIT) {
    return <SubmitButton {...props}>{text}</SubmitButton>;
  }

  return <RoundedButton {...props}>{text}</RoundedButton>;
};

RatingButton.defaultProps = {
  active: false,
  buttonType: RATING,
};

export default RatingButton;
