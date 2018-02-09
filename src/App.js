import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import Rooter from "./Rooter";
import reducers from "./reducers";

export default class App extends Component {
  state = {
    load: true
  };

  componentDidMount() {
    this.setState({
      load: false
    });
  }
  render() {
    const store = createStore(reducers, applyMiddleware(thunk));
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
