import React, {useReducer} from 'react';
import CurrenciesRatesService from '../api/CurrencyRatesService';

const service = new CurrenciesRatesService((window.appConfig || {}).exchangeApiUrl);

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = (action) => {
    if (typeof action === 'function') {
      return action(dispatch, state, service);
    }

    return dispatch(action);
  };

  return [state, thunkDispatch];
};

export default useThunkReducer;
