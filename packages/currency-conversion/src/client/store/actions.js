export const convertCurrency = (payload) => {
  return async (dispatch, state, service) => {
    const {fromCurrency, toCurrency} = payload;

    dispatch({type: 'CONVERSION_PROCESSING', payload});

    if (fromCurrency === toCurrency) {
      dispatch({type: 'CONVERSION_SUCCESS', payload: {value: 1}});
      return;
    }

    try {
      const rate = await service.getRate(fromCurrency, toCurrency);
      dispatch({type: 'CONVERSION_SUCCESS', payload: rate});
    } catch {
      dispatch({type: 'CONVERSION_FAILURE'});
    }
  }
};
