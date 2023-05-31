import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonForPageProps } from '../../types/types';

type Property = keyof PersonForPageProps;

type Action = {
  type: Property;
  value: PersonForPageProps[Property];
};

const initialState: PersonForPageProps = {
  person: {
    person_id: 0,
    name: '',
    enName: '',
    photo: '',
    profession: '',
    description: '',
    enProfession: '',
    films: [],
  },
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setPerson(state, action: PayloadAction<Action>) {
      state[action.payload.type] = action.payload.value as PersonForPageProps['person'];
    },
  },
});

export const { setPerson } = personSlice.actions;

export default personSlice.reducer;
