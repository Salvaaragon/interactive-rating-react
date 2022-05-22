// vendors
import React from 'react';
// styles
import { RatingTextContainer } from './ratingText.styled';

// types
type Props = {
  text: string;
  type: 'title' | 'paragraph' | 'info';
};

const RatingText = (props: Props): React.ReactElement => {
  const { text, type } = props;
  return <RatingTextContainer type={type}>{text}</RatingTextContainer>;
};

RatingText.defaultProps = {
  type: 'paragraph',
};

export default RatingText;
