import { Dispatch, SetStateAction } from 'react';

export type ParseInput = {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
};

export type Rates = {
  rate: number;
  result: number;
};

export type Conversion = {
  id: React.Key;
  amount: number;
  to: string;
  from: string;
  result: number;
};

export type ConversionResultProps = {
  rates: Rates;
  errorMessage: string;
  isInitialConversion: boolean;
  setIsInitialConversion: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  conversionValues: ParseInput;
};

export type SearchFieldProps = {
  rates: Rates;
  setRates: Dispatch<SetStateAction<Rates>>;
  setIsInitialConversion: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: any;
  setPrevConversions: Dispatch<SetStateAction<Conversion[]>>;
  setConversionValues: Dispatch<SetStateAction<ParseInput>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type ConversionHistoryProps = {
  prevConversions: Conversion[];
  setPrevConversions: Dispatch<SetStateAction<Conversion[]>>;
};
