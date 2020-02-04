import React from 'react';
import {action} from '@storybook/addon-actions';
import TextField from '../../../src/client/components/text-field/text-field';

import styles from './story.module.scss';

export default {title: 'TextField'};

export const Basic = () => (
  <div className={styles.container}>
    <TextField
      label="Amount *"
      placeholder="Type an amount"
      onChange={action('change')}
      error="Amount cannot be blank"
    />
  </div>
);

export const WithDebounce = () => (
  <div className={styles.container}>
    <TextField
      debounceTimeout={300}
      label="With debounce = 300"
      placeholder="Type an amount"
      onChange={action('change')}
    />
  </div>
);

export const Disabled = () => (
  <div className={styles.container}>
    <TextField
      disabled
      label="Disabled TextField"
      placeholder="Type an amount"
      onChange={action('change')}
    />
  </div>
);

export const Password = () => (
  <div className={styles.container}>
    <TextField
      label="Your password"
      placeholder="Your password"
      onChange={action('change')}
      type="password"
    />
  </div>
);
