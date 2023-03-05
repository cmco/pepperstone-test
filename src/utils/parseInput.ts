export const parseInput = (input: string) => {
  const parsedInput = input.split(' ');
  let amount = '';
  let fromCurrency = '';
  let toCurrency = '';

  parsedInput.map((string) => {
    if (isNaN(Number(string)) === false) {
      amount = string;
    }
    if (string.length === 3 && isNaN(Number(string))) {
      if (fromCurrency === '') {
        fromCurrency = string;
      } else {
        toCurrency = string;
      }
    }
  });

  return {
    amount: parseInt(amount),
    fromCurrency,
    toCurrency,
  };
};
