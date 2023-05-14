import { combineReducers, configureStore } from '@reduxjs/toolkit';

import breakpointReducer from './reducers/breakpointSlice';
import dropdownMenuReducer from './reducers/dropdownMenuSlice';
import filteredMoviesReducer from './reducers/filteredMoviesSlice';
import genresReducer from './reducers/genresSlice';

const rootReducer = combineReducers({
  breakpoint: breakpointReducer,
  dropdownMenu: dropdownMenuReducer,
  filteredMovies: filteredMoviesReducer,
  genres: genresReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
