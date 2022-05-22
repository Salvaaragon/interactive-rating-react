//  vendors
import styled from 'styled-components';
// icons
import { IconDevices } from '@tabler/icons';

export const StarIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.ratingLightBlue};
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.ratingWhite};
  display: flex;
  height: 50px;
  width: 50px;
`;
StarIconWrapper.displayName = 'StarIconWrapper';

export const IconDevicesStyled = styled(IconDevices)`
  color: ${({ theme }) => theme.colors.ratingOrange};
`;
IconDevicesStyled.displayName = 'IconDevicesStyled';
