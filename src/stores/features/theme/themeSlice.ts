import { createSlice } from '@reduxjs/toolkit'

interface IThemeState {
    theme: 'light' | 'dark'
}

const initialState = {
    theme: 'light',
} satisfies IThemeState as IThemeState

// Define the initial state and a reducer using createSlice
const authSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Define additional synchronous actions here if needed
    },
    extraReducers: () => {},
})

export default authSlice.reducer
