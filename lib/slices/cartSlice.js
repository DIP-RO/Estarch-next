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
    // Other reducers like removeFromCart, clearCart can be added here
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
