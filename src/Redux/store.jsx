import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import leadsReducer from './features/leads/leadsSlice';

const store = configureStore({
    reducer: {
        leads: leadsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
