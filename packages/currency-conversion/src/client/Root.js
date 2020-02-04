import React from 'react';

import CurrencyConversionPage from './currency-conversion/currency-conversion-page';
import {AppStoreContextProvider} from './contexts/AppStoreContext';

const Root = () => {
  return (
    <AppStoreContextProvider>
      <CurrencyConversionPage/>
    </AppStoreContextProvider>
  );
};

export default Root;
