import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonsForSlider } from '../../types/types';

type Property = keyof PersonsForSlider;

type Action = {
  type: Property;
  value: PersonsForSlider[Property];
};

const initialState: PersonsForSlider = {
  persons: [],
};

export const personsForSliderSlice = createSlice({
  name: 'personsForSlider',
  initialState,
  reducers: {
    setPersonsForSlider(state, action: PayloadAction<Action>) {
      state[action.payload.type] = action.payload.value as PersonsForSlider['persons'];
    },
  },
});

export const { setPersonsForSlider } = personsForSliderSlice.actions;

export default personsForSliderSlice.reducer;
