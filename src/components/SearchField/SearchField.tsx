import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Stack } from '@mui/material';

import { parseInput } from './../../utils/parseInput';
import { fetchRates } from '../../utils/api';
import { Conversion, SearchFieldProps } from '../../types';
import { StyledButtonBox, StyledTextField } from './SearchField.styles';

export const SearchField = ({
  rates,
  setRates,
  setIsInitialConversion,
  errorMessage,
  setErrorMessage,
  setPrevConversions,
  setConversionValues,
  setIsLoading,
}: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const values = parseInput(inputValue);

  const handleSubmit = () => {
    let ratesData = {
      rate: 0,
      result: 0,
    };
    const handleFetch = async () => {
      try {
        setIsLoading(true);
        ratesData = await fetchRates(
          values.fromCurrency,
          values.toCurrency,
          values.amount.toString(),
          setErrorMessage,
        );
        setRates(ratesData);
      } catch (e: any) {
        setErrorMessage(e.message);
      }
      setIsLoading(false);
    };
    handleFetch();
  };

  const handleKeyDownCapture = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (!errorMessage && inputValue !== '') {
      let newConversionHistoryItem: Conversion = {
        id: uuidv4(),
        amount: values.amount,
        from: values.fromCurrency,
        to: values.toCurrency,
        result: rates.result,
      };

      setPrevConversions((prevConversions: Conversion[]) => [
        newConversionHistoryItem,
        ...prevConversions,
      ]);

      setConversionValues(values);
      setIsInitialConversion(true);
    }
  }, [rates]);

  return (
    <Stack>
      <StyledTextField
        id='outlined-basic'
        variant='outlined'
        placeholder='100 EUR to USD'
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDownCapture={(e) => handleKeyDownCapture(e)}
      />
      <StyledButtonBox>
        <Button variant='contained' onClick={handleSubmit}>
          Get Rates
        </Button>
      </StyledButtonBox>
    </Stack>
  );
};
