// vendors
import React from 'react';
// components
import RatingInfo from '../../../ratingInfo/ratingInfo';
import RatingText from '../../../ratingText/ratingText';
import DevicesIcon from '../../../devicesIcon/devicesIcon';
// constants
import { NUM_RATINGS } from '../../../../constants/app.constants';
// styles
import { RatingSuccessContainer, RatingInfoContainer } from './ratingSuccess.styled';

// types
type Props = {
  rating: number;
};

const RatingSuccess = ({ rating }: Props): React.ReactElement => {
  return (
    <RatingSuccessContainer>
      <DevicesIcon />
      <RatingInfoContainer>
        <RatingInfo text={`You selected ${rating} out of ${NUM_RATINGS}`} />
      </RatingInfoContainer>
      <RatingText text="Thank you!" type="title" />
      <RatingText text="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" />
    </RatingSuccessContainer>
  );
};

export default RatingSuccess;
