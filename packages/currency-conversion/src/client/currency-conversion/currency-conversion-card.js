import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

import Card from '../components/card/card';
import TextField from '../components/text-field/text-field';
import CurrencySelect from '../components/select/currency-select';
import {Column, Row} from '../components/layout/responsive';
import TransferIcon from '../components/icons/transfer-icon';

import {currencyIsoCodes} from '../constants/currency-iso-codes';
import {conversionStatus} from '../constants/conversion-status';

import ExchangeButton from '../components/buttons/exchange-button';
import ConversionResult from './conversion-result';

import connect from '../store/connect';
import validateAmountValue from '../utils/validate-amount-value';

import {convertCurrency} from '../store/actions'

import styles from './currency-conversion-card.module.scss';

export const CurrencyConversionCard = (props) => {
  const {
    defaultAmount,
    defaultFrom,
    defaultTo,
    status,
    convertCurrency
  } = props;

  const [amount, setAmount] = useState(defaultAmount);
  const [fromCurrency, setFromCurrency] = useState(defaultFrom);
  const [toCurrency, setToCurrency] = useState(defaultTo);
  const [error, setError] = useState('');

  const handleAmountChange = useCallback((value) => {
    setError(validateAmountValue(value));
    setAmount(value);
  }, []);

  const handleSwitchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const canProcess = status !== conversionStatus.processing && !error;
  const handleConvertClick = () => {
    if (!canProcess) return;

    convertCurrency({amount, fromCurrency, toCurrency});
  };

  return <Card className={styles.card}>
    <Row className={styles.content}>
      <Column sm={4}>
        <TextField
          label="Amount *"
          debounceTimeout={300}
          value={amount}
          error={error}
          placeholder="Type an amount"
          onChange={handleAmountChange}
        />
      </Column>
      <Column sm={3}>
        <CurrencySelect label="From"
                        value={fromCurrency}
                        onChange={setFromCurrency}
                        className={styles.currency__select}/>
      </Column>
      <Column sm={1} className={styles.transferColumn}>
        <TransferIcon onClick={handleSwitchCurrencies} className={styles.transferIcon}/>
      </Column>
      <Column sm={3}>
        <CurrencySelect label="To"
                        value={toCurrency}
                        onChange={setToCurrency}
                        className={styles.currency__select}/>
      </Column>
      <Column sm={1}>
        <ExchangeButton disabled={!canProcess}
                        onClick={handleConvertClick}
                        className={styles.exchangeButton}/>
      </Column>
    </Row>
    <Row>
      <Column className={styles.result}>
        <ConversionResult/>
      </Column>
    </Row>
  </Card>
};

CurrencyConversionCard.propTypes = {
  defaultAmount: PropTypes.string,
  defaultFrom: PropTypes.oneOf(Object.values(currencyIsoCodes)),
  defaultTo: PropTypes.oneOf(Object.values(currencyIsoCodes)),
  status: PropTypes.oneOf(Object.values(conversionStatus)),
  convertCurrency: PropTypes.func,
};

const mapStateToProps = (state) => ({
  defaultAmount: state.amount.toString(),
  defaultFrom: state.from,
  defaultTo: state.to,
  status: state.status,
});

const mapDispatchToProps = () => ({
  convertCurrency,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CurrencyConversionCard
);
