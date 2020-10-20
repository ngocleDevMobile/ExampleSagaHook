import {INCREMENT, DECREMENT} from '../actions/actionType';
import {takeEvery} from 'redux-saga/effects'

export function* sayHello() {
    console.log('Hello World');
}

function* decrement(){
    console.log("This is decrement saga");
}
export function* watchDecrement(){
    //console,log("watchDecrement saga");
    yield takeEvery(DECREMENT, decrement)
}

function* increment(){
    console.log("This is increment saga");
}
export function* watchIncrement(){
    //console,log("watchIncrement saga");
    yield takeEvery(INCREMENT, increment)
}