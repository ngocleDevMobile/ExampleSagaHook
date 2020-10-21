import {ADD_MOVIE, FETCH_FAILED,FETCH_MOVIE,FETCH_SUCCESS, UPDATE_SUCCESS,UPDATE_MOVIE, DELETE_SUCCESS} from '../actions/actionType';

const movieReducers = (movies= [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];
        case UPDATE_SUCCESS:
            return movies.map(eachMovie => (
                eachMovie._id.toString() === action.updatedMovie._id
            ) ? {...eachMovie,
                name: action.updatedMovie.name,
                realeaseYear: action.updatedMovie.realeaseYear
            } : eachMovie)
            
        case DELETE_SUCCESS:
            const filteredMovies = movies.filter(eachMovie => {
                return eachMovie._id.toString() !== action.deletedMovieId.toString();
            });
            return filteredMovies;
        default:
            return movies

    }
}

export default movieReducers;