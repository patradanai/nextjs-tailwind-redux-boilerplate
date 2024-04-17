import React from 'react'

import { NextPage } from 'next'

interface Props {
    name: string
    label: string
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: any
    error?: string
}

const FormSwitch: NextPage<Props> = ({
    name,
    label,
    onChangeHandler,
    value,
    error,
}) => {
    return (
        <div>
            <label className="relative inline-flex cursor-pointer items-center">
                <input
                    name={name}
                    type="checkbox"
                    value={value}
                    className="peer sr-only"
                    onChange={onChangeHandler}
                    checked={value}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                <span className="ms-3 text-sm font-medium text-secondary">
                    {label}
                </span>
            </label>
            {error && (
                <div>
                    <p className="text-sm text-red-500">{error}</p>
                </div>
            )}
        </div>
    )
}

export default FormSwitch
