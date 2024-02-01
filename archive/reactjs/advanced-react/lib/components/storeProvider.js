import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    };

    state = this.usedState();

    onStoreChange = () => {
      if(this.subscriptionId) {
        this.setState(this.usedState());
      }
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
      this.context.store.startClock();
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return <Component {...this.props}
                        {...extraProps(this.context.store, this.props)}
        store={this.context.store} />;
    }
  };
};

export default storeProvider;