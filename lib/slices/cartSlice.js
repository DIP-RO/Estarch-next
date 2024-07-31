import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product, quantity, color, size } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.color = color; // Update color
        existingItem.size = size;   // Update size
      } else {
        state.items.push({
          id,
          product,
          quantity,
          color,
          size
        });
      }
      
      state.totalQuantity += quantity;
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== id);
          state.totalQuantity -= 1;
        }
      }
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
