import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  &.MuiContainer-root {
    padding: 0;
    max-width: none;
    height: 100vh;
  }
  padding: 48px 0;
  width: 100%;
  background-color: floralwhite;
`;
