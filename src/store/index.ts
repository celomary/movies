import {configureStore} from '@reduxjs/toolkit';
import rootReducers from '../combineReducer';

const store = configureStore({
  reducer: rootReducers,
});

export type StoreStateType = ReturnType<typeof store.getState>;
export default store;
