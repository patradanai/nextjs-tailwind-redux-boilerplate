import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    ref?: any
    hidden?: boolean
    containerClassName?: string
    innerClassName?: string
    inputClassName?: string
    containerLabel?: string
    required?: boolean
    label?: string
    name: string
    type?: string
    placeholder?: string
    errors?: string | undefined
    touch?: boolean | undefined
    inputValue?: string | number | undefined
    handleOnChange?: (_data: any) => void
    remark?: string
    disabled?: boolean
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    min?: number
    max?: number
}

export const InputField: NextPage<Props> = ({
    ref,
    hidden = false,
    containerClassName,
    innerClassName,
    inputClassName,
    containerLabel,
    inputValue,
    label,
    name,
    type = 'text',
    placeholder,
    errors,
    required,
    remark,
    disabled,
    startIcon,
    endIcon,
    handleOnChange,
    min,
    max,
}) => {
    return (
        <>
            {!hidden && (
                <div className={cn('text-black w-full', containerClassName)}>
                    <div className={cn('flex flex-col', innerClassName)}>
                        {label && (
                            <div className={cn('mb-3', containerLabel)}>
                                <label
                                    className={`text-sm ${
                                        required
                                            ? 'after:text-[#FF0000] after:content-["*"]'
                                            : ''
                                    }`}
                                    htmlFor={name}
                                >
                                    {label}
                                </label>
                            </div>
                        )}
                        <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden  rounded outline outline-1 outline-[#e6e6e6] focus-within:outline-2">
                            {startIcon && (
                                <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                                    {startIcon}
                                </div>
                            )}
                            <input
                                min={min}
                                max={max}
                                ref={ref}
                                id={name}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                value={inputValue}
                                className={cn(
                                    {
                                        ' bg-[#9c9b9b] bg-opacity-10 text-[#999999]':
                                            disabled,
                                    },
                                    cn(
                                        'bg-white placeholder-[#9c9b9b] placeholder:text-sm appearance-none outline-none rounded w-full h-[38px] px-4',
                                        inputClassName
                                    )
                                )}
                                onChange={handleOnChange}
                                disabled={disabled}
                            />
                            {endIcon && (
                                <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                                    {endIcon}
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-[#9c9b9b]">{remark}</p>
                    {errors ? (
                        <div className="text-sm text-red-600">{errors}</div>
                    ) : null}
                </div>
            )}
        </>
    )
}
