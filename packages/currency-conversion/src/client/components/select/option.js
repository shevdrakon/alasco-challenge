import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const {value, children, className, onSelect} = props;

  const handleSelect = () => {
    onSelect && onSelect(value);
  };

  return <div className={className} onClick={handleSelect}>
    {children}
  </div>
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onSelect: PropTypes.func,
};

export default Option;
