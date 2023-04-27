import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DropdownMenu } from '../../types/types';

const initialState: DropdownMenu = {
  dropdownMenuHoveredItem: '',
};

export const dropdownMenuSlice = createSlice({
  name: 'dropdownMenu',
  initialState,
  reducers: {
    setDropdownMenuHoveredItem(state, action: PayloadAction<DropdownMenu['dropdownMenuHoveredItem']>) {
      state.dropdownMenuHoveredItem = action.payload;
    },
  },
});

export const { setDropdownMenuHoveredItem } = dropdownMenuSlice.actions;

export default dropdownMenuSlice.reducer;
