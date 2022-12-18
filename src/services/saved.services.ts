import {Dispatch} from '@reduxjs/toolkit';
import {addSaved, removeSaved, setSaved} from '../actions/saved.actions';
import {CardApiType, SavedReducerActionType} from '../types';

export const addSavedService = (card: CardApiType) => {
  return (dispatch: Dispatch<SavedReducerActionType>) => {
    dispatch(addSaved(card));
  };
};

export const removeSavedService = (id: number) => {
  return (dispatch: Dispatch<SavedReducerActionType>) => {
    dispatch(removeSaved(id));
  };
};

export const setSavedService = (cards: CardApiType[]) => {
  return (dispatch: Dispatch<SavedReducerActionType>) => {
    dispatch(setSaved(cards));
  };
};
