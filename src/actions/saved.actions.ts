import {CardApiType} from '../types';

export const addSaved = (
  card: CardApiType,
): {
  type: 'ADD';
  payload: CardApiType;
} => {
  return {
    type: 'ADD',
    payload: card,
  };
};

export const removeSaved = (
  id: number,
): {
  type: 'REMOVE';
  payload: number;
} => {
  return {
    type: 'REMOVE',
    payload: id,
  };
};

export const setSaved = (
  cards: CardApiType[],
): {
  type: 'SET';
  payload: CardApiType[];
} => {
  return {
    type: 'SET',
    payload: cards,
  };
};
