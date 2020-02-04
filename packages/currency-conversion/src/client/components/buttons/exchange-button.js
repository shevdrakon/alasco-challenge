import React from 'react';

import Button from '../../components/buttons/button';
import {ExchangeIcon} from '../../components/icons';

import cn from 'classnames';
import styles from './exchange-button.module.scss';

const ExchangeButton = (props) => {
  const {className, ...rest} = props;
  const classes = cn(styles.button, className);

  return (
    <Button className={classes} {...rest}>
      <ExchangeIcon className={styles.button__icon}/>
    </Button>
  )
};

export default ExchangeButton;
