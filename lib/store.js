// lib/store.js
import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
import slideReducer from './slices/sliderSlice'
import cardSlideReducer from './slices/cardSlideSlice'
import sizeReducer from './slices/sizeSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        slide: slideReducer,
        cardSlide: cardSlideReducer,
        size:sizeReducer


    },
})

export default store
