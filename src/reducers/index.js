import {combineReducers} from 'redux'
import counterReducers from './counterReducers'
import movieReducers from './movieReducers'

const allReducers = combineReducers({
    counterReducers,movieReducers
});

export default allReducers;