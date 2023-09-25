import { configureStore } from '@reduxjs/toolkit';
import applicationFormReducer from './ApplicationFormSlice';

const store = configureStore({
    reducer: {
        applicationForm: applicationFormReducer,
    },
});

export default store;


