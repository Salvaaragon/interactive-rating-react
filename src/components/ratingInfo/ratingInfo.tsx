// vendors
import React from 'react';
// components
import RatingText from '../ratingText/ratingText';
// styles
import { RatingInfoContainer } from './ratingInfo.styled';

// types
type Props = {
  text: string;
};

const RatingInfo = ({ text }: Props): React.ReactElement => {
  return (
    <RatingInfoContainer>
      <RatingText text={text} type="info" />
    </RatingInfoContainer>
  );
};

export default RatingInfo;
