import { Container } from '@mui/material';
import React from 'react';

import { Converter } from './pages/Converter';
import { StyledContainer } from './App.styles';

const App = () => {
  return (
    <StyledContainer>
      <Converter />
    </StyledContainer>
  );
};

export default App;
