import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import CounterComponent from './components/CounterComponent'
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => {
    return (
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    );
}
sagaMiddleware.run(rootSaga);
export default App;