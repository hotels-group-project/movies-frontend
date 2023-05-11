import { combineReducers, configureStore } from '@reduxjs/toolkit';

import breakpointReducer from './reducers/breakpointSlice';
import dropdownMenuReducer from './reducers/dropdownMenuSlice';
import genresReducer from './reducers/genresSlice';

const rootReducer = combineReducers({
  breakpoint: breakpointReducer,
  genres: genresReducer,
  dropdownMenu: dropdownMenuReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
