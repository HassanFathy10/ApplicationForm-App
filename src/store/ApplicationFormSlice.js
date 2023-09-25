
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define  API URL based on the OpenAPI specification
const apiUrl = 'http://127.0.0.1:3100/api/{version}/programs/{programId}/application-form';

// Create an async thunk to fetch data
export const fetchApplicationForm = createAsyncThunk('applicationForm/fetch', async ({ version, programId, thunkAPI }) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await fetch(apiUrl.replace('{version}', version).replace('{programId}', programId));
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getTemplate = createAsyncThunk("applicationForm/fetch", async ({ version, programId, thunkAPI }) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiUrl.replace('{version}', version).replace('{programId}', programId), {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        return data;
    } catch {
        return rejectWithValue(Error.massage);
    }
});

export const updateTemplate = createAsyncThunk("applicationForm/fetch", async ({ version, programId, thunkAPI }) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(apiUrl.replace('{version}', version).replace('{programId}', programId), {
            method: "PUT",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        return programId;
    } catch {
        return rejectWithValue(Error.massage);
    }
});

// Create a slice to manage application form state
const applicationFormSlice = createSlice({
    name: 'applicationForm',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchApplicationForm.pending]: (state) => {
            state.loading = true;
        },
        [fetchApplicationForm.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [fetchApplicationForm.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        // get template
        [getTemplate.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [getTemplate.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getTemplate.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //
        [updateTemplate.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateTemplate.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
            console.log(action.payload)
        },
        [updateTemplate.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
});

export default applicationFormSlice.reducer;