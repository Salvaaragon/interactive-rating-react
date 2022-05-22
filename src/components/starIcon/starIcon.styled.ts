//  vendors
import styled from 'styled-components';
// icons
import { IconStar } from '@tabler/icons';

export const StarIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.ratingLightBlue};
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.ratingWhite};
  display: flex;
  height: 50px;
  width: 50px;
`;
StarIconWrapper.displayName = 'StarIconWrapper';

export const IconStarStyled = styled(IconStar)`
  color: ${({ theme }) => theme.colors.ratingOrange};
  fill: ${({ theme }) => theme.colors.ratingOrange};
  margin: auto;
`;
IconStarStyled.displayName = 'IconStarStyled';
