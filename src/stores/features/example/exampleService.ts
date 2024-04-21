import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { IPokemon } from '@/types/pokemon'

const baseApi = fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' })

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: baseApi,
    endpoints: (builder) => ({
        getPokemonByName: builder.query<IPokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
