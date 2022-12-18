import {CardApiType, SavedReducerActionType} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: CardApiType[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('@savedItem', JSON.stringify(value));
  } catch (e) {}
};

const savedReducer = (
  state: CardApiType[] = [],
  action: SavedReducerActionType,
): CardApiType[] => {
  let updatedState;
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'ADD':
      updatedState = [...state, action.payload];
      storeData(updatedState);
      return updatedState;
    case 'REMOVE':
      updatedState = state.filter(item => item.id !== action.payload);
      storeData(updatedState);
      return updatedState;
    default:
      return state;
  }
};

export default savedReducer;
