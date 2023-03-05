import React from 'react';

import SwapVertIcon from '@mui/icons-material/SwapVert';

import { ConversionResultProps } from '../../types';
import {
  StyledBox,
  StyledCircularProgress,
  StyledErrorBox,
  StyledFinalAmountDiv,
  StyledFlexBox,
  StyledInitialAmountDiv,
} from './ConversionResult.styles';

export const ConversionResult = ({
  rates,
  errorMessage,
  isInitialConversion,
  setIsInitialConversion,
  isLoading,
  conversionValues,
}: ConversionResultProps) => {
  return (
    <>
      {isLoading && <StyledCircularProgress size={'8rem'} />}
      {errorMessage !== '' && <StyledErrorBox>{errorMessage}</StyledErrorBox>}
      {!isLoading && conversionValues.amount !== 0 && (
        <StyledBox onClick={() => setIsInitialConversion(!isInitialConversion)}>
          {isInitialConversion && !errorMessage ? (
            <StyledFlexBox>
              <div>
                <StyledInitialAmountDiv>
                  {conversionValues.amount}{' '}
                  {conversionValues.fromCurrency.toUpperCase()} equals
                </StyledInitialAmountDiv>
                <StyledFinalAmountDiv>
                  {rates.result && rates.result.toFixed(2)}{' '}
                  {conversionValues.toCurrency.toUpperCase()}
                </StyledFinalAmountDiv>
              </div>
              <SwapVertIcon />
            </StyledFlexBox>
          ) : (
            <StyledFlexBox>
              <div>
                <StyledInitialAmountDiv>
                  {conversionValues.amount}{' '}
                  {conversionValues.toCurrency.toUpperCase()} equals
                </StyledInitialAmountDiv>
                <StyledFinalAmountDiv>
                  {rates.result &&
                    (conversionValues.amount / rates.rate).toFixed(2)}{' '}
                  {conversionValues.fromCurrency.toUpperCase()}
                </StyledFinalAmountDiv>
              </div>
              <SwapVertIcon />
            </StyledFlexBox>
          )}
        </StyledBox>
      )}
    </>
  );
};
