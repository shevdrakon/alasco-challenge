import React, {useContext} from 'react';

import {convertCurrency} from './actions';
import {AppDispatchContext, AppStoreContext} from '../contexts/AppStoreContext';

const bindActionCreators = (actionCreators, dispatch) => {
  const keys = Object.keys(actionCreators);
  const boundActionCreators = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        dispatch(actionCreator.apply(this, arguments));
      }
    }
  }
  return boundActionCreators
};

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  const WithConnect = (props) => {
    const dispatch = useContext(AppDispatchContext);
    const state = useContext(AppStoreContext);

    let actionProps = {};
    if (mapDispatchToProps) {
      actionProps = bindActionCreators({
        convertCurrency,
      }, dispatch);
    }

    let stateProps = {};
    if (mapStateToProps) {
      stateProps = mapStateToProps(state);
    }

    return <WrappedComponent {...actionProps} {...stateProps} {...props} />;
  };

  return WithConnect;
};

export default connect;
