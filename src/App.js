// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Rooter from './navigation/Rooter';
import { store, persistor } from './reducers';

type State = {
  load: boolean
};

export default class App extends React.Component<null, State> {
  constructor() {
    super();
    this.state = {
      load: true
    };
  }

  componentDidMount() {
    this.setState({
      load: false
    });
  }
  render() {
    if (this.state.load) {
      return <div />;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Rooter />
        </PersistGate>
      </Provider>
    );
  }
}
