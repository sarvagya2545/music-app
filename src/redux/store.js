import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './trackSlice';

export const store = configureStore({
    reducer: {
        tracks: tracksReducer
    }
})