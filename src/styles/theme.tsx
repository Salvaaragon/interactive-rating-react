// vendors
import React from 'react';
// providers
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    ratingOrange: 'hsl(25, 97%, 53%)',
    ratingWhite: 'hsl(0, 0%, 100%)',
    ratingLightGrey: 'hsl(217, 12%, 63%)',
    ratingMediumGrey: 'hsl(216, 12%, 54%)',
    ratingLightBlue: 'hsl(213, 19%, 30%)',
    ratingDarkBlue: 'hsl(213, 19%, 18%)',
    ratingVeryDarkBlue: 'hsl(216, 12%, 8%)',
  },
  fonts: ['Overpass'],
  fontSizes: {
    small: '12px',
    normal: '15px',
    large: '25px',
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
