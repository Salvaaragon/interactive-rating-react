// vendors
import styled from 'styled-components';

export const RatingLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.ratingVeryDarkBlue};
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
RatingLayoutContainer.displayName = 'RatingLayoutContainer';

export const RatingLayoutBox = styled.div`
  background-color: ${({ theme }) => theme.colors.ratingDarkBlue};
  border-radius: 30px;
  height: 350px;
  margin: auto;
  padding: 25px;
  width: 300px;
`;
RatingLayoutBox.displayName = 'RatingLayoutBox';
