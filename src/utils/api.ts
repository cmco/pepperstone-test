const BASE_URL = 'https://api.apilayer.com/exchangerates_data';
const API_KEY = '4QXqoAsxf4MUAWyiOUEFecwFmJHVQAJA';

// TODO: what is the response type in the Promise? We should avoid using 'any'
type API = (params: {
  endpoint: string;
  params: {
    from?: string;
    to?: string;
    amount?: string;
  };
}) => Promise<any>;

const api: API = ({ endpoint, params = {} }) => {
  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();
  const myHeaders = new Headers();
  myHeaders.append('apikey', API_KEY);

  return fetch(`${BASE_URL}${endpoint}?${queryString}`, {
    method: 'GET',
    headers: myHeaders,
  });
};

export const fetchRates = async (
  fromCurrency: string,
  toCurrency: string,
  amount: string,
  setErrorMessage: any,
) => {
  try {
    const response = await api({
      endpoint: '/convert',
      params: { from: fromCurrency, to: toCurrency, amount: amount },
    });
    const responseText = await response.text();
    const { info, result, error } = JSON.parse(responseText);

    if (error) {
      setErrorMessage(error.message);
      return error;
    }

    if (!result) {
      setErrorMessage('Could not fetch rates.');
      return error;
    }

    setErrorMessage('');
    return { result, rate: info.rate };
  } catch (errorResponse) {
    throw errorResponse;
  }
};
