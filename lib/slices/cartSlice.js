// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Assuming an array of cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addItem(state, action) {
          state.items.push(action.payload);
      },
      removeItem(state, action) {
          state.items = state.items.filter((item, index) => index !== action.payload);
      },
      increaseQuantity(state, action) {
          const item = state.items[action.payload];
          if (item) {
              item.quantity += 1;
          }
      },
      decreaseQuantity(state, action) {
          const item = state.items[action.payload];
          if (item && item.quantity > 1) {
              item.quantity -= 1;
          }
      },
      clearCart(state) {
          state.items = [];
      },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
