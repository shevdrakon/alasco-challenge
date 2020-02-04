import React from 'react';
import {action} from '@storybook/addon-actions';
import Select from '../../../src/client/components/select/select';
import CurrencySelect from '../../../src/client/components/select/currency-select';

import styles from './story.module.scss';
import {currencyIsoCodes} from '../../../src/client/constants/currency-iso-codes';

export default {title: 'Select'};

export const Basic = () => (
  <div className={styles.container}>
    <Select
      label="Basic selector"
      onChange={action('change')}
      value="s"
    >
      <Select.Option key="f" value="f">
        First
      </Select.Option>
      <Select.Option key="s" value="s">
        Second <strong>with</strong> html <i>inside</i>
      </Select.Option>
    </Select>
  </div>
);

export const CurrencySelector = () => (
  <div className={styles.container}>
    <CurrencySelect label="Currency" value={currencyIsoCodes.euro} onChange={action('change')}/>
  </div>
);
