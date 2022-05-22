// vendors
import React from 'react';
// components
import RatingButton from '../../../ratingButton/ratingButton';
import RatingList from '../../../ratingList/ratingList';
import RatingText from '../../../ratingText/ratingText';
import StarIcon from '../../../starIcon/starIcon';
// styles
import { StarIconContainer, RatingListContainer } from './ratingStep.styled';

// types
type Props = {
  handleChangeRating: (rating: number) => void;
  handleClickSubmit: () => void;
  rating: number;
};

const RatingStep = ({
  handleChangeRating,
  handleClickSubmit,
  rating,
}: Props): React.ReactElement => {
  return (
    <div>
      <StarIconContainer>
        <StarIcon />
      </StarIconContainer>
      <RatingText text="How did we do?" type="title" />
      <RatingText text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
      <RatingListContainer>
        <RatingList rating={rating} handleChangeRating={handleChangeRating} />
      </RatingListContainer>
      <RatingButton
        buttonType="submit"
        disabled={rating === 0}
        text="Submit"
        onClick={handleClickSubmit}
      />
    </div>
  );
};

export default RatingStep;
