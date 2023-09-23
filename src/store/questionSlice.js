import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: 'questions',
    initialState: { questions: null },
    reducers: {},
})

export default questionsSlice.reducer;