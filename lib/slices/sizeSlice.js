import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const sizeSlice = createSlice({
  name: 'sze',
  initialState,
  reducers: {
    toggleSize: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSize: (state) => {
      state.isOpen = true;
    },
    closeSize: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSize, openSize, closeSize } = sizeSlice.actions;
export default sizeSlice.reducer;
