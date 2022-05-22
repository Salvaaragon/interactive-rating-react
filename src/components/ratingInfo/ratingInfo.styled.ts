// vendors
import styled from 'styled-components';

export const RatingInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.ratingLightBlue};
  border-radius: 20px;
  display: inline-block;
  opacity: 0.8;
  padding: 4px 20px;
`;
RatingInfoContainer.displayName = 'RatingInfoContainer';
