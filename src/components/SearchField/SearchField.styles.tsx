import styled from 'styled-components';

import { Box, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    display: flex;
    margin: 0 auto 16px;
    width: 50%;
  }
`;

export const StyledButtonBox = styled(Box)`
  margin: auto auto 16px;
`;
