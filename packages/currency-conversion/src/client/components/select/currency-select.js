import React from 'react';
import PropTypes from 'prop-types';

import {currencyIsoCodes} from '../../constants/currency-iso-codes';
import {EuroCoinIcon, DollarCoinIcon, YenCoinIcon} from '../icons';
import Select from './select';

import styles from './currency-select.module.scss'

const CurrencySelect = (props) => {
  const {label, value, onChange, className} = props;

  const handleChange = (nextValue) => {
    onChange && onChange(nextValue);
  };

  return (
    <Select label={label} value={value} onChange={handleChange} className={className}>
      <Select.Option value={currencyIsoCodes.euro}>
        <div className={styles.option}>
          <EuroCoinIcon className={styles.option__icon}/>
          Euro
        </div>
      </Select.Option>
      <Select.Option value={currencyIsoCodes.dollar}>
        <div className={styles.option}>
          <DollarCoinIcon className={styles.option__icon}/>
          Dollar
        </div>
      </Select.Option>
      <Select.Option value={currencyIsoCodes.yen}>
        <div className={styles.option}>
          <YenCoinIcon className={styles.option__icon}/>
          Yen
        </div>
      </Select.Option>
    </Select>
  );
};

CurrencySelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOf(Object.values(currencyIsoCodes)).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default CurrencySelect;
