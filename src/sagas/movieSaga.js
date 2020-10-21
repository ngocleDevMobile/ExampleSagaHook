import {FETCH_FAILED, FETCH_SUCCESS, FETCH_MOVIE, ADD_MOVIE, UPDATE_SUCCESS,UPDATE_MOVIE, DELETE_SUCCESS, DELETE_MOVIE} from '../actions/actionType'
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

//Get Movie
function* fetchMovies() {
    try {
        const receivedMovie = yield Api.getMoviesFromApi();
        yield put({
            type: FETCH_SUCCESS,
            receivedMovies: receivedMovie
        });
    } catch (error) {
        yield put({
            type: FETCH_FAILED,
            error
        });

    }
}
export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIE, fetchMovies);
}

//Add new movie
function* addNewMovie(action){
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if(result === true){
            yield put({
                type: FETCH_MOVIE,

            });
        }
    } catch (error) {

    }
}
export function* watchAddMovies(){
    yield takeLatest(ADD_MOVIE, addNewMovie);
}

//Update a movie
function* updateMovie(action){
    try {
        const result = yield Api.updateMovieFromApi(action.updatedMovie);
        if(result === true){
            yield put({
                type: UPDATE_SUCCESS,
                updatedMovie: action.updatedMovie

            });
        }
    } catch (error) {

    }
}

export function* watchUpdateMovie(){
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}

//Delete a movie
function* deleteMovie(action){
    try {
        const result = yield Api.deleteMovieFromApi(action.deletedMovieId);
        if(result === true){
            yield put({
                type: DELETE_SUCCESS,
                deletedMovieId: action.deletedMovieId

            });
        }
    } catch (error) {

    }
}

export function* watchDeleteMovie(){
    yield takeLatest(DELETE_MOVIE, deleteMovie);
}
