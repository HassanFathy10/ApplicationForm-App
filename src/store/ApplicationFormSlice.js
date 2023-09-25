
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define  API URL based on the OpenAPI specification
const apiUrl = 'http://127.0.0.1:3100/api/{version}/programs/{programId}/application-form';

// Create an async thunk to fetch data
export const fetchApplicationForm = createAsyncThunk(
    'applicationForm/fetch',
    async ({ version, programId }) => {
        const response = await fetch(apiUrl.replace('{version}', version).replace('{programId}', programId));

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    }
);

// Create a slice to manage application form state
const applicationFormSlice = createSlice({
    name: 'applicationForm',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplicationForm.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApplicationForm.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchApplicationForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default applicationFormSlice.reducer;