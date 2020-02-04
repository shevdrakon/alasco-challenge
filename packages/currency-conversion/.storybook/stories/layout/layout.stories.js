import React from 'react';
// import {action} from '@storybook/addon-actions';

import {
  Container,
  Row,
  Column
} from '../../../src/client/components/layout/responsive';

import styles from './story.module.scss';
import Layout from '../../../src/client/components/layout/layout';
import CurrencyCoinsIcon from '../../../src/client/components/icons/currency-coins-icon';

import {CurrencyConversionCard} from '../../../src/client/currency-conversion/currency-conversion-card';
import {currencyIsoCodes} from '../../../src/client/constants/currency-iso-codes';
import {conversionStatus} from '../../../src/client/constants/conversion-status';
import {AppStoreContext} from '../../../src/client/contexts/AppStoreContext';

export default {title: 'Layout'};

export const ResponsiveRendering = () => (
  <Container>
    <Row>
      <Column xs={12} sm={6} md={8}>
        <div className={styles.cell}>
          md: 8, sm: 6, xs: 12
        </div>
      </Column>
      <Column xs={6} md={4}>
        <div className={styles.cell}>
          md: 4, xs: 6
        </div>
      </Column>
    </Row>
    <Row>
      <Column sm={4}>
        <div className={styles.cell}>
          sm: 4
        </div>
      </Column>
      <Column sm={8}>
        <div className={styles.cell}>
          <Row>
            <Column xs={6}>
              <div className={styles.cell}>
                xs: 6
              </div>
            </Column>
            <Column xs={6}>
              <div className={styles.cell}>
                xs: 6
              </div>
            </Column>
          </Row>
        </div>
      </Column>
    </Row>
  </Container>
);

export const BasicLayout = () => (
  <Layout>
    <Container>
      <Row>
        <Column sm={12} className={styles.description}>
          <CurrencyCoinsIcon size={40}/>
          <h1>Check our awesome currency conversion calculator now!</h1>
        </Column>
      </Row>
      <Row className={styles.footer}>
        <Column>
          <AppStoreContext.Provider value={{
            amount: 10,
            status: conversionStatus.success,
            from: currencyIsoCodes.euro,
            to: currencyIsoCodes.dollar,
            rate: {value: 1.01}
          }}>
            <CurrencyConversionCard
              defaultAmount="1"
              defaultFrom={currencyIsoCodes.euro}
              defaultTo={currencyIsoCodes.dollar}
              status={conversionStatus.idle}
              convertCurrency={() => {
              }}
            />
          </AppStoreContext.Provider>
        </Column>
      </Row>
    </Container>
  </Layout>
);

export const CurrencyConversionCardLayout = () => {
  return <AppStoreContext.Provider value={{
    status: conversionStatus.error,
  }}>
    <CurrencyConversionCard
      defaultAmount="1"
      defaultFrom={currencyIsoCodes.euro}
      defaultTo={currencyIsoCodes.dollar}
      status={conversionStatus.idle}
      convertCurrency={() => {
      }}
    />
  </AppStoreContext.Provider>
};
