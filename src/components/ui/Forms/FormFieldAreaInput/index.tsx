import React from 'react'

import classNames from 'classnames'
import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    containerClassName?: string
    innerClassName?: string
    inputClassName?: string
    require?: boolean
    name: string
    label?: string
    placeholder?: string
    errors?: string | undefined
    touch?: boolean | undefined
    inputValue: string | number | undefined
    disabled?: boolean
    handleOnChange: (_data: any) => void
}

export const InputArea: NextPage<Props> = ({
    containerClassName,
    innerClassName,
    inputClassName,
    inputValue,
    name,
    label,
    placeholder,
    errors,
    require,
    disabled,
    handleOnChange,
}) => {
    return (
        <div className={cn('w-full mb-5', containerClassName)}>
            <div className={cn('flex flex-col h-full', innerClassName)}>
                {label && (
                    <div className={cn('mb-3')}>
                        <label
                            className={`text-sm ${
                                require
                                    ? 'after:text-[#FF0000] after:content-["*"]'
                                    : ''
                            }`}
                            htmlFor={name}
                        >
                            {label}
                        </label>
                    </div>
                )}
                <textarea
                    disabled={disabled}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue}
                    className={classNames(
                        {
                            'bg-[#9c9b9b] bg-opacity-10 text-[#999999]':
                                disabled,
                        },
                        cn(
                            'bg-white placeholder-[#9c9b9b] placeholder:text-sm appearance-none outline-none h-full min-h-[100px] p-5 border border-[#e6e6e6] rounded w-full',
                            inputClassName
                        )
                    )}
                    onChange={handleOnChange}
                />
            </div>
            {errors ? (
                <div className="text-sm text-red-500">{errors}</div>
            ) : null}
        </div>
    )
}
