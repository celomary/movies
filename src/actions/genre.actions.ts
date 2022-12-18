import {GenreReducerStateType} from '../types';

export const addGenres = (
  genres: GenreReducerStateType,
): {
  type: 'ADD_GENRES';
  payload: GenreReducerStateType;
} => {
  return {
    type: 'ADD_GENRES',
    payload: genres,
  };
};
