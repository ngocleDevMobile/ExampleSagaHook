import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import CounterComponent from './components/CounterComponent';
import MovieComponent from './components/MovieComponent';
import PlayerLog from './components/PlayerLog';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const Stack = createStackNavigator();
const App = () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Counter" component={CounterComponent} />
          <Stack.Screen name="ListMovie" component={MovieComponent} />
          <Stack.Screen name="PlayerLog" component={PlayerLog} />
        </Stack.Navigator>
          {/* //<CounterComponent /> */}
      </NavigationContainer>
    </Provider>
      
    );
}
sagaMiddleware.run(rootSaga);
export default App;