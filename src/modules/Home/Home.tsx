'use client'
import React from 'react'

import { NextPage } from 'next'

import Button from '@/components/ui/Button/Button'
import Container from '@/components/ui/Container/Container'
import { useGetPokemonByNameQuery } from '@/stores/features/example/exampleService'
import { increment, decrement } from '@/stores/features/example/exampleSlice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'

interface Props {}

const HomeModule: NextPage<Props> = () => {
    const value = useAppSelector((state) => state.exmaple.value)
    const { data, isLoading, isError } = useGetPokemonByNameQuery('bulbasaur')

    const dispatch = useAppDispatch()

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error</p>
    }

    return (
        <Container className="pb-20">
            <div className="flex justify-around">
                <Button onClick={() => dispatch(increment())}>Plus</Button>
                <h1 className="text-center text-3xl font-bold">{value}</h1>

                <Button onClick={() => dispatch(decrement())}>Minus</Button>
            </div>

            <div className="text-white">{data?.name}</div>
        </Container>
    )
}

export default HomeModule
