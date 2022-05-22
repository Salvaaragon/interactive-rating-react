// vendors
import React from 'react';
// components
import RatingLayout from './components/ratingLayout/ratingLayout';
// theme
import GlobalFonts from './styles/globalFonts';
import Theme from './styles/theme';

const App = (): React.ReactElement => {
  return (
    <Theme>
      <GlobalFonts />
      <RatingLayout />
    </Theme>
  );
};

export default App;
