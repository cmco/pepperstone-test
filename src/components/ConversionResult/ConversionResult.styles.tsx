import styled from 'styled-components';

import { Box, CircularProgress } from '@mui/material';

export const StyledCircularProgress = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    display: flex;
  }
  margin: auto auto 16px;
`;

export const StyledErrorBox = styled(Box)`
  background-color: pink;
  width: 50%;
  margin: auto auto 48px;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
`;

export const StyledBox = styled(Box)`
  width: 40%;
  background-color: white;
  border: 1px solid gray;
  margin: auto auto 48px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

export const StyledFlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInitialAmountDiv = styled.div`
  font-size: 1rem;
`;

export const StyledFinalAmountDiv = styled.div`
  font-size: 1.5rem;
`;
