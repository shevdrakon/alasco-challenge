import validateAmountValue from '../../../src/client/utils/validate-amount-value';

describe('Validate amount value', () => {
  it('should return an error if nothing passed', () => {
    const actual = validateAmountValue();
    expect(actual).toBe('Amount should be a number');
  });

  it('should return an error if empty passed', () => {
    const actual = validateAmountValue('');
    expect(actual).toBe('Amount should be a number');
  });

  it('should return an error if wrong number', () => {
    const actual = validateAmountValue('1df');
    expect(actual).toBe('Amount should be a number');
  });

  it('should return an error if negative number', () => {
    const actual = validateAmountValue('-1');
    expect(actual).toBe('Amount should be positive number');
  });

  it('should return no error if proper number', () => {
    const actual = validateAmountValue('100');
    expect(actual).toBe('');
  });
});
