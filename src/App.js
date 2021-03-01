import React, { Component } from 'react';
import './App.scss';
import { Provider, connect } from 'react-redux';
import store from './store';
import persistor from './store';
import MainApp from './components/mainApp/MainApp';
import { PersistGate } from 'redux-persist/integration/react';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faComment,
  faUserCircle,
  faAt,
  faMoon,
  faAdjust,
  faFont
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faArrowRight,
  faComment,
  faUserCircle,
  faAt,
  faMoon,
  faAdjust,
  faFont
);

class App extends Component {
  render() {
    // console.log('run');

    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={persistor.persistor}>
          <MainApp/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
