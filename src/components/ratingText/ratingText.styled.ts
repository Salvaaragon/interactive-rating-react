// vendors
import styled, { css } from 'styled-components';

interface RatingTextContainerProps {
  type: string;
}

const RatingTextInfo = css`
  color: ${({ theme }) => theme.colors.ratingOrange};
  font-family: Overpass Semi Bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const RatingTextParagraph = css`
  color: ${({ theme }) => theme.colors.ratingMediumGrey};
  font-family: Overpass;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const RatingTextTitle = css`
  color: ${({ theme }) => theme.colors.ratingWhite};
  font-family: Overpass;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const RatingTextContainer = styled.div<RatingTextContainerProps>`
  ${props => {
    if (props.type === 'info') {
      return RatingTextInfo;
    }
    if (props.type === 'title') {
      return RatingTextTitle;
    }
    return RatingTextParagraph;
  }}
`;
RatingTextContainer.displayName = 'RatingTextContainer';
