import React from 'react';
import {shallow} from 'enzyme'

import {ConversionResult} from '../../../src/client/currency-conversion/conversion-result';
import {conversionStatus} from '../../../src/client/constants/conversion-status';
import {currencyIsoCodes} from '../../../src/client/constants/currency-iso-codes';

describe('ConversionResult component', () => {
  describe('Rendering labels', () => {
    it('should render only idle message in idle status', () => {
      const component = shallow(<ConversionResult status={conversionStatus.idle}/>);

      const idleMessage = component.find('[data-test-idle]');
      const errorMessage = component.find('[data-test-error]');
      const successMessage = component.find('[data-test-success]');

      expect(idleMessage.length).toEqual(1);
      expect(errorMessage.length).toEqual(0);
      expect(successMessage.length).toEqual(0);
    });

    it('should render error message in error status', () => {
      const component = shallow(<ConversionResult status={conversionStatus.error}/>);

      const idleMessage = component.find('[data-test-idle]');
      const errorMessage = component.find('[data-test-error]');
      const successMessage = component.find('[data-test-success]');

      expect(idleMessage.length).toEqual(0);
      expect(errorMessage.length).toEqual(1);
      expect(successMessage.length).toEqual(0);
    });

    it('should render success message in success status', () => {
      const component = shallow(
        <ConversionResult
          status={conversionStatus.success}
          from={currencyIsoCodes.euro}
          to={currencyIsoCodes.dollar}
          amount={10}
          rate={{value: 1.1}}
        />
      );
      const idleMessage = component.find('[data-test-idle]');
      const errorMessage = component.find('[data-test-error]');
      const successMessage = component.find('[data-test-success]');

      expect(idleMessage.length).toEqual(0);
      expect(errorMessage.length).toEqual(0);
      expect(successMessage.length).toEqual(1);
      expect(successMessage.text()).toEqual('10 EUR =11 USD');
    });
  });
});
