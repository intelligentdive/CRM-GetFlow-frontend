import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    }
});

export default store;
