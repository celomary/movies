import {GenreReducerStateType, GenreReducerActionType} from '../types';
const genreReducer = (
  state: GenreReducerStateType = [],
  action: GenreReducerActionType,
) => {
  switch (action.type) {
    case 'ADD_GENRES':
      return action.payload;
    default:
      return state;
  }
};

export default genreReducer;
