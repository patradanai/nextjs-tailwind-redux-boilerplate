'use client'

import { createContext, useContext, useState } from 'react'

import { NextPage } from 'next'

import { Snackbar } from '@/components/ui/Snackbar'

export const SnackbarContext = createContext<ISnackbarContext | null>(null)

interface Props {
    children: React.ReactNode
}

interface IMessage {
    id?: string
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
}

interface ISnackbarContext {
    enqueueSnackbar: (message: IMessage) => void
}

const SnackBarProvider: NextPage<Props> = (props) => {
    const { children } = props
    const [alerts, setAlerts] = useState<IMessage[]>([])

    const enqueueSnackbar = (message: IMessage) => {
        setAlerts((val: IMessage[]) => [
            ...val,
            { ...message, id: Date.now().toString() },
        ])
    }

    return (
        <SnackbarContext.Provider value={{ enqueueSnackbar }} {...props}>
            {children}
            {alerts?.map((val) => (
                <Snackbar
                    key={val.id}
                    type={val.type}
                    message={val.message}
                    isOpen
                />
            ))}
        </SnackbarContext.Provider>
    )
}

const useSnackBar = () => {
    return useContext(SnackbarContext) as ISnackbarContext
}

export { SnackBarProvider, useSnackBar }
