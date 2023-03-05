import React, { useState } from 'react';

import { Conversion, ParseInput } from '../types';
import { ConversionHistory } from '../components/ConversionHistory/ConversionHistory';
import Header from '../components/Header/Header';
import { SearchField } from '../components/SearchField/SearchField';
import { ConversionResult } from '../components/ConversionResult/ConversionResult';

export const Converter = () => {
  const [prevConversions, setPrevConversions] = useState<Conversion[]>([]);
  const [rates, setRates] = useState({ rate: 0, result: 0 });
  const [errorMessage, setErrorMessage] = useState('');
  const [isInitialConversion, setIsInitialConversion] = useState(true);
  const [conversionValues, setConversionValues] = useState<ParseInput>({
    amount: 0,
    fromCurrency: '',
    toCurrency: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Header />
      <SearchField
        rates={rates}
        setRates={setRates}
        setIsInitialConversion={setIsInitialConversion}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setConversionValues={setConversionValues}
        setPrevConversions={setPrevConversions}
        setIsLoading={setIsLoading}
      />
      <ConversionResult
        rates={rates}
        errorMessage={errorMessage}
        isInitialConversion={isInitialConversion}
        setIsInitialConversion={setIsInitialConversion}
        conversionValues={conversionValues}
        isLoading={isLoading}
      />
      <ConversionHistory
        prevConversions={prevConversions}
        setPrevConversions={setPrevConversions}
      />
    </>
  );
};
