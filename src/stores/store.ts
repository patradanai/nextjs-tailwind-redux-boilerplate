import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { env } from '@/utils/env'

import { pokemonApi } from './features/example/exampleService'
import rootReducer from './rootReducer'

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger, pokemonApi.middleware),
        devTools: env.NEXT_PUBLIC_ENVIRONMENT !== 'production',
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
