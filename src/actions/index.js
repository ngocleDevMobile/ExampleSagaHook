import { DECREMENT, INCREMENT, ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCESS, FETCH_FAILED, UPDATE_MOVIE,UPDATE_SUCCESS, DELETE_MOVIE,DELETE_SUCCESS } from './actionType'

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

//Movie 
export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie
    }
}

export const fetchMovieAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCESS,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

//Update movie
export const updateItemAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}

export const updateItemSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_SUCCESS,
        updatedMovie
    }
}

//Delete
export const deleteItemAction = (deletedMovieId) => {
    return {
        type: DELETE_MOVIE,
        deletedMovieId
    }
}

export const deleteItemSuccessAction = (deletedMovieId) => {
    return {
        type: DELETE_SUCCESS,
        deletedMovieId
    }
}
