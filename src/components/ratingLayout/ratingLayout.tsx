// vendors
import React, { useState } from 'react';
// components
import RatingStep from './components/ratingStep/ratingStep';
import RatingSuccess from './components/ratingSuccess/ratingSuccess';
// styles
import { RatingLayoutContainer, RatingLayoutBox } from './ratingLayout.styled';

const RatingLayout = (): React.ReactElement => {
  const [step, setStep] = useState<'rating' | 'success'>('rating');
  const [rating, setRating] = useState(0);

  return (
    <RatingLayoutContainer>
      <RatingLayoutBox>
        {step === 'rating' && (
          <RatingStep
            handleChangeRating={(newRating: number) => setRating(newRating)}
            handleClickSubmit={() => setStep('success')}
            rating={rating}
          />
        )}
        {step === 'success' && <RatingSuccess rating={rating} />}
      </RatingLayoutBox>
    </RatingLayoutContainer>
  );
};

export default RatingLayout;
