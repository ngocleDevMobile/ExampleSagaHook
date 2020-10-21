import {call, all, fork} from 'redux-saga/effects'
import {watchDecrement, watchIncrement, sayHello} from './counterSagas';
import {watchFetchMovies, watchAddMovies, watchUpdateMovie, watchDeleteMovie} from './movieSaga';

export default function* rootSaga(){
    yield  all([
        call(watchFetchMovies),
        call(watchAddMovies),
        call(watchUpdateMovie),
        call(watchDeleteMovie),
    ])

    // yield [
    //     fork(watchFetchMovies),
    //     fork(watchAddMovies)
    // ]

    // yield call(
    //     // sayHello,
    //     // watchDecrement(),
    //     //  watchIncrement(),
    //      watchFetchMovies
    // );


    //call chi goi mot
    //all goi nhieu nhung chi cai cuoi
    //fork cai dau, sai sau van thuc hien
}