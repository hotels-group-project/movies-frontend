import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Breakpoint } from '../../types/types';

const initialState: Breakpoint = {
  isDesktop: true,
  isTablet: true,
};

export const breakpointSlice = createSlice({
  name: 'breakpoint',
  initialState,
  reducers: {
    setIsDesktop(state, action: PayloadAction<boolean>) {
      state.isDesktop = action.payload;
    },
    setIsTablet(state, action: PayloadAction<boolean>) {
      state.isTablet = action.payload;
    },
  },
});

export const { setIsDesktop, setIsTablet } = breakpointSlice.actions;

export default breakpointSlice.reducer;
