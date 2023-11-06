import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import leadsReducer from './features/leads/leadsSlice';
import accountSlice from './features/account/accountSlice';
import contactSlice from './features/contact/contactSlice';
import opportunitySlice from './features/opportunity/opportunitySlice';

const store = configureStore({
    reducer: {
        leads: leadsReducer,
        account: accountSlice,
        contact: contactSlice,
        opportunity: opportunitySlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
