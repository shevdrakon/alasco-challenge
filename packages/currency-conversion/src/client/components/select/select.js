import React, {useState, useCallback, useRef} from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './select.module.scss';

import Option from './option';

const Select = (props) => {
  const {label = '', value, children, onChange, className} = props;
  const container = useRef(null);
  const [active, setActive] = useState(false);

  const handleClickOutside = useCallback(() => {
    setActive(false);
  }, []);

  const handleOpenMenu = () => {
    setActive(true);
  };

  const handleOptionClick = (nextValue) => {
    setActive(false);

    if (nextValue !== value) {
      onChange && onChange(nextValue);
    }
  };

  useOutsideClick(container, handleClickOutside);

  const selectedOption = React.Children.toArray(children)
    .filter(x => x.type === Option)
    .find(x => x.props.value === value);

  const options = React.Children.toArray(children)
    .filter(x => x.type === Option)
    .map(x => React.cloneElement(x, {
      key: x.props.value,
      className: styles['select__option'],
      onSelect: handleOptionClick
    }));

  return (
    <div className={className}>
      <label className={styles['select__label']}>
        {label}
      </label>
      <div ref={container} className={styles['select__root']}>
        <div onClick={handleOpenMenu}
             className={cn(styles['select__dropdown'], {[styles['select__dropdown--active']]: active})}>
          <div>{selectedOption}</div>
          <span className={cn(styles['select__arrow'], {[styles['select__arrow--active']]: active})}/>
        </div>
        {active && <div className={styles['select__menu']}>
          {options}
        </div>}
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Select.Option = Option;

export default Select;
