import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { pokemonApi } from './exampleService'

interface ICounterState {
    value: number
    data: any
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined
}

const initialState = {
    value: 0,
    status: 'idle',
    error: undefined,
    data: {},
} satisfies ICounterState as ICounterState

// Define the initial state and a reducer using createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Define additional synchronous actions here if needed
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            pokemonApi.endpoints.getPokemonByName.matchFulfilled,
            (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            }
        ),
            builder.addMatcher(
                pokemonApi.endpoints.getPokemonByName.matchRejected,
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message
                }
            )
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
