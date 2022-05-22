// vendors
import styled from 'styled-components';

interface RatingButtonProps {
  active: boolean;
}

export const RoundedButton = styled.button<RatingButtonProps>`
  background-color: ${props =>
    props.active ? props.theme.colors.ratingLightGrey : props.theme.colors.ratingLightBlue};
  border-radius: 100%;
  border: none;
  color: ${props =>
    props.active ? props.theme.colors.ratingWhite : props.theme.colors.ratingLightGrey};
  cursor: pointer;
  font-family: Overpass Bold;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  height: 50px;
  transition: 0.3s;
  width: 50px;

  :hover {
    background-color: ${({ theme }) => theme.colors.ratingOrange};
    color: ${({ theme }) => theme.colors.ratingWhite};
  }
`;
RoundedButton.displayName = 'RoundedButton';

export const SubmitButton = styled.button<RatingButtonProps>`
  background-color: ${props =>
    props.disabled ? props.theme.colors.ratingLightGrey : props.theme.colors.ratingOrange};
  border-radius: 20px;
  border: none;
  color: ${props =>
    props.disabled ? props.theme.colors.ratingLightBlue : props.theme.colors.ratingWhite};
  cursor: ${props => !props.disabled && 'pointer'};
  font-family: Overpass Bold;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  height: 40px;
  opacity: ${props => props.disabled && '0.5'};
  transition: 0.3s;
  width: 100%;

  :hover {
    background-color: ${props =>
      props.disabled ? props.theme.colors.ratingLightGrey : props.theme.colors.ratingWhite};
    color: ${props =>
      props.disabled ? props.theme.colors.ratingLightBlue : props.theme.colors.ratingOrange};
  }
`;
SubmitButton.displayName = 'SubmitButton';
