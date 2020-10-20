import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import CounterComponent from './components/CounterComponent'
import {createStore} from 'redux'
import allReducers from './reducers'

let store = createStore(allReducers);

const App = () => {
    return (
      <Provider store={store}>
        <CounterComponent />
      </Provider>
        
    );
}
export default App;