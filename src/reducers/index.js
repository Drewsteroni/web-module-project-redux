import { combineReducers } from 'redux';
import favoriteReducer from './favoritesReducer';
import movieReducer from './movieReducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    favorite: favoriteReducer,
  });