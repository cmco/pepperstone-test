import React from 'react';

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import { ConversionHistoryProps } from './../../types/index';
import {
  StyledConversionsBox,
  StyledHeaderBox,
  StyledInitialAmountDiv,
  StyledFinalAmountDiv,
} from './ConversionHistory.styles';

export const ConversionHistory = ({
  prevConversions,
  setPrevConversions,
}: ConversionHistoryProps) => {
  const handleClearAll = () => {
    setPrevConversions([]);
  };

  const handleDeleteConversion = (id: React.Key) => {
    const newPrevConversions = prevConversions.filter(
      (conversion) => id !== conversion.id,
    );

    setPrevConversions(newPrevConversions);
  };

  return (
    <>
      <StyledHeaderBox>
        <div>Previous Amounts</div>
        <Button
          variant='contained'
          startIcon={<DeleteIcon />}
          onClick={handleClearAll}>
          Clear All
        </Button>
      </StyledHeaderBox>
      {prevConversions.length !== 0 &&
        prevConversions.map((conversion) => (
          <StyledConversionsBox
            key={conversion.id}
            onClick={() => handleDeleteConversion(conversion.id)}>
            <div>
              <StyledInitialAmountDiv>
                {conversion.amount} {conversion.from.toUpperCase()} equals
              </StyledInitialAmountDiv>
              <StyledFinalAmountDiv>
                {conversion.result} {conversion.to.toUpperCase()}
              </StyledFinalAmountDiv>
            </div>
            <CloseIcon />
          </StyledConversionsBox>
        ))}
    </>
  );
};
