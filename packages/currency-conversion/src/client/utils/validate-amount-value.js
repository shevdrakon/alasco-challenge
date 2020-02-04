const validateAmountValue = (value) => {
  if (value === '' || isNaN(value))
    return `Amount should be a number`;

  if (parseInt(value) < 0)
    return `Amount should be positive number`;

  return '';
};

export default validateAmountValue;
