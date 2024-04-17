import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    require?: boolean
    onChange: (name: string, value: any) => void
    value?: string
    placeholder: string
    name: string
    label?: string
    inputClassName?: string
    labelClassName?: string
    outterClassName?: string
}

export const InputSearch: NextPage<Props> = ({
    outterClassName,
    require,
    onChange,
    value,
    name,
    label,
    inputClassName,
    labelClassName,
    placeholder = 'Search...',
}) => {
    const handleChange = (event: any) => {
        onChange(name, event.target.value)
    }

    return (
        <div className="box-border w-full">
            {label && (
                <div className={cn('mb-3', labelClassName)}>
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
            <div
                className={
                    (cn(outterClassName),
                    'flex items-center rounded outline outline-1  outline-[rgba(196,196,196,0.8)] focus-within:outline-blue focus-within:outline-2 box-border bg-white')
                }
            >
                <div className="bg-inherit px-2">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="size-5 text-[rgba(196,196,196,1)]"
                    />
                </div>
                <div className="w-full">
                    <input
                        placeholder={placeholder}
                        type="text"
                        id={name}
                        name={name}
                        value={value}
                        onChange={(event: any) => handleChange(event)}
                        className={cn(
                            'pl-3 placeholder:text-sm appearance-none w-full h-[38px] outline-none',
                            inputClassName
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
