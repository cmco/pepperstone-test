import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledHeaderBox = styled(Box)`
  width: 50%;
  margin: auto auto 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledConversionsBox = styled(Box)`
  width: 40%;
  background-color: gainsboro;
  margin: auto auto 48px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
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
