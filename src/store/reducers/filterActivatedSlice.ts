import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterActivated } from '../../types/types';

const initialState: FilterActivated = {
  filterActivated: false,
};

export const filterActivatedSlice = createSlice({
  name: 'filterActivated',
  initialState,
  reducers: {
    setFilterActivated(state, action: PayloadAction<FilterActivated['filterActivated']>) {
      state.filterActivated = action.payload;
    },
  },
});

export const { setFilterActivated } = filterActivatedSlice.actions;

export default filterActivatedSlice.reducer;
