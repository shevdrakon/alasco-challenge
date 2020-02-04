import React from 'react';

import Button from '../../components/buttons/button';
import {TransferIcon} from '../../components/icons';

import cn from 'classnames';
import styles from './switch-button.module.scss';

const SwitchButton = (props) => {
  const {className, ...rest} = props;
  const classes = cn(styles.button, className);

  return (
    <Button className={classes} {...rest}>
      <TransferIcon className={styles.button__icon}/>
    </Button>
  )
};

export default SwitchButton;
