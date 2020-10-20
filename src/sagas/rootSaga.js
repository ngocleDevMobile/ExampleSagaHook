import {all} from 'redux-saga/effects'
import {watchDecrement, watchIncrement, sayHello} from './counterSagas';

export default function* rootSaga(){
    yield all([
        sayHello,
        watchDecrement(),
         watchIncrement(),
    ])
}