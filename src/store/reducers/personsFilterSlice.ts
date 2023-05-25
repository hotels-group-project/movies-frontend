import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonsFilter } from '../../types/types';

const initialState: PersonsFilter = {
  producers: [],
  actors: [],
};

export const personsFilterSlice = createSlice({
  name: 'personsFilter',
  initialState,
  reducers: {
    setProducers(state, action: PayloadAction<PersonsFilter['producers']>) {
      state.producers = action.payload;
    },
    setActors(state, action: PayloadAction<PersonsFilter['actors']>) {
      state.actors = action.payload;
    },
  },
});

export const { setProducers, setActors } = personsFilterSlice.actions;

export default personsFilterSlice.reducer;
