import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0, // Add this line
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // Add this line
        },
        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.items.find(i => i.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // Add this line
        },
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.items.find(i => i.id === itemId);
            if (item) {
                item.quantity += 1;
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // Add this line
        },
        removeItem(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter(i => i.id !== itemId);
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // Add this line
        },
        // Other reducers...
    },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
