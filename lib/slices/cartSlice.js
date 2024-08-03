import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalQuantity: JSON.parse(localStorage.getItem('totalQuantity')) || 0,
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
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.items.find(i => i.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.items.find(i => i.id === itemId);
            if (item) {
                item.quantity += 1;
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
        removeItem(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter(i => i.id !== itemId);
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
    },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
