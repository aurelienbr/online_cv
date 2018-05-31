// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import Rooter from './Rooter';
import reducers from './reducers';

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
    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
    );
    if (this.state.load) {
      return <div />;
    }
    return (
      <Provider store={store}>
        <Rooter />
      </Provider>
    );
  }
}
