import { combineReducers } from '@reduxjs/toolkit'

import ExampleSlice from '@/stores/features/example/exampleSlice'

import AuthSlice from './features/auth/authSlice'
import { pokemonApi } from './features/example/exampleService'
import ThemeSlice from './features/theme/ThemeSlice'

const rootReducer = combineReducers({
    exmaple: ExampleSlice,
    auth: AuthSlice,
    theme: ThemeSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
})
export default rootReducer
