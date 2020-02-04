import React from 'react';
import {action} from '@storybook/addon-actions';

import Button from '../../../src/client/components/buttons/button';
import SwitchButton from '../../../src/client/components/buttons/switch-button';
import ExchangeButton from '../../../src/client/components/buttons/exchange-button';

import styles from './story.module.scss';

export default {title: 'Buttons'};

export const PrimaryButton = () => (
  <div className={styles.container}>
    <Button onClick={action('click')}>Button</Button>
  </div>
);


export const PrimaryDisabledButton = () => (
  <div className={styles.container}>
    <Button disabled onClick={action('disabled click')}>Disabled Button</Button>
  </div>
);

export const ControlsButton = () => (
  <div className={styles.container}>
    <div className={styles.container__button}>
      <SwitchButton onClick={action('switch button click')}/>
    </div>
    <div className={styles.container__button}>
      <ExchangeButton onClick={action('exchange button click')}/>
    </div>
  </div>
);
