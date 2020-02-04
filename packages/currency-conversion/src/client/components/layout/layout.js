import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../../styles/_globals.scss';

import cn from 'classnames';
import styles from './layout.module.scss';

const Layout = (props) => {
  const {children, className} = props;

  return (
    <div className={cn(styles.body, className)}>
      <Header/>
      <div className={styles.body__content}>
        {children}
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Layout;
