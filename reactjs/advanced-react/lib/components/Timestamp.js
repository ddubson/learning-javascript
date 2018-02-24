import React from 'react';
import storeProvider from './storeProvider';

const Timestamp = (props) => {
  return (
    <div>
      {props.timestamp.toString()}
    </div>
  );
};

const extraProps = (store) => {
  return {
    timestamp: store.getState().timestamp
  };
};

export default storeProvider(extraProps)(Timestamp);
