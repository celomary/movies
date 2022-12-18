import {combineReducers} from '@reduxjs/toolkit';
import genreReducer from '../reducers/genre.reducer';
import savedReducer from '../reducers/saved.reducer';

const rootReducers = combineReducers({
  genres: genreReducer,
  saved: savedReducer,
});

export default rootReducers;
