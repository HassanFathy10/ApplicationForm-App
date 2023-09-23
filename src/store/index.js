import { configureStore } from '@reduxjs/toolkit'
import questions from './questionSlice'

export default configureStore({
    reducer: {
        questions,
    },
})
