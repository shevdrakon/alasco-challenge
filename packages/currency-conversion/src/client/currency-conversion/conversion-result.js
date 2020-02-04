import React from 'react';
import PropTypes from 'prop-types';

import connect from '../store/connect';
import {conversionStatus} from '../constants/conversion-status';

import styles from './conversion-result.module.scss';

export const ConversionResult = (props) => {
  const {amount, status, rate = {}, from, to} = props;
  const {value} = rate;

  return <div>
    {status === conversionStatus.idle &&
    <h3 data-test-idle>Please click a convert button</h3>}
    {status === conversionStatus.error &&
    <h3 data-test-error>Oops, something went totally wrong. Please, try again.</h3>}
    {status === conversionStatus.success && <div data-test-success>
      <h3 className={styles.from}>{`${amount} ${from} =`}</h3>
      <h2 className={styles.to}>{`${amount * value} ${to}`}</h2>
    </div>}
  </div>
};

ConversionResult.propTypes = {
  amount: PropTypes.number,
  from: PropTypes.string,
  to: PropTypes.string,
  status: PropTypes.oneOf(Object.values(conversionStatus)),
  rate: PropTypes.shape({
    value: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  amount: state.amount,
  rate: state.rate,
  status: state.status,
  from: state.from,
  to: state.to,
});

export default connect(mapStateToProps)(ConversionResult);
