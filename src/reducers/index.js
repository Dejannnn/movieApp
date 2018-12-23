import  movies from './movies_reducers';
import  favourites from './favourite_movie_reducer';
import {combineReducers} from 'redux';

const rootReducer= combineReducers({movies,favourites});


export default rootReducer;