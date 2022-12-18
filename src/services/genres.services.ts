import {addGenres} from '../actions/genre.actions';
import {Dispatch} from '@reduxjs/toolkit';
import {GenreReducerActionType} from '../types';
import {fetchGenres} from '../apis';

export const addGenresService = () => {
  return async (dispatch: Dispatch<GenreReducerActionType>) => {
    const genres = await fetchGenres();
    dispatch(addGenres(genres));
  };
};
