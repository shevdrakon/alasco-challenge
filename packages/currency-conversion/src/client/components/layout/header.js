import React from 'react';
import styles from './header.module.scss';

import AlascoIcon from '../icons/alasco-icon';

const Header = () => {
  return (
    <nav className={styles.header}>
      <AlascoIcon/>
    </nav>
  )
};

export default Header;
