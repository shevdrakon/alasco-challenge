import {currencyIsoCodes} from '../constants/currency-iso-codes';
import {conversionStatus} from '../constants/conversion-status';

export const initialState = {
  amount: 1,
  from: currencyIsoCodes.euro,
  to: currencyIsoCodes.dollar,
  status: conversionStatus.idle,
  rate: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CONVERSION_PROCESSING': {
      const {fromCurrency, toCurrency, amount} = action.payload;

      return {
        ...state,
        amount: parseInt(amount),
        from: fromCurrency,
        to: toCurrency,
        status: conversionStatus.processing,
      }
    }
    case 'CONVERSION_FAILURE': {
      return {
        ...state,
        status: conversionStatus.error,
      }
    }
    case 'CONVERSION_SUCCESS': {
      return {
        ...state,
        status: conversionStatus.success,
        rate: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};
