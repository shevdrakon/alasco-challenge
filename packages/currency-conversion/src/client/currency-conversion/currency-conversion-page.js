import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import ConversionCard from './currency-conversion-card';
import {Column, Container, Row} from '../components/layout/responsive';
import {CurrencyCoinsIcon} from '../components/icons';

import styles from './currency-conversion-page.module.scss';

const CurrencyConversionPage = ({className}) => {
  return <Layout className={className}>
    <Container>
      <Row>
        <Column sm={12} className={styles.description}>
          <CurrencyCoinsIcon size={40}/>
          <h1>Check our awesome currency conversion calculator now!</h1>
        </Column>
      </Row>
      <Row className={styles.footer}>
        <Column>
          <ConversionCard/>
        </Column>
      </Row>
    </Container>
  </Layout>
};

CurrencyConversionPage.propTypes = {
  className: PropTypes.string,
};

export default CurrencyConversionPage;
