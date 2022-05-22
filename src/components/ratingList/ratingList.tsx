// vendors
import React from 'react';
// components
import RatingButton from '../ratingButton/ratingButton';
// constants
import { NUM_RATINGS } from '../../constants/app.constants';
// styles
import { RatingListContainer } from './ratingList.styled';

// types
type Props = {
  rating: number;
  handleChangeRating: (rating: number) => void;
};

const RatingList = ({ rating, handleChangeRating }: Props): React.ReactElement => {
  return (
    <RatingListContainer>
      {Array.from({ length: NUM_RATINGS }, (_, i) => i + 1).map(element => (
        <RatingButton
          key={element}
          active={element === rating}
          text={String(element)}
          onClick={() => element !== rating && handleChangeRating(Number(element))}
        />
      ))}
    </RatingListContainer>
  );
};

export default RatingList;
