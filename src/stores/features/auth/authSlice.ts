import { createSlice } from '@reduxjs/toolkit'

export enum AuthStatus {
    Loading,
    Error,
    Success,
    Initial,
}

interface IAuthState {
    status: AuthStatus
    error: string | undefined
}

const initialState = {
    status: AuthStatus.Initial,
    error: undefined,
} satisfies IAuthState as IAuthState

// Define the initial state and a reducer using createSlice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Define additional synchronous actions here if needed
        reset: (state) => {
            state.status = AuthStatus.Initial
        },
    },
    extraReducers: () => {},
})

export const { reset } = authSlice.actions

export default authSlice.reducer
