import React, { ChangeEvent, useTransition } from 'react'

import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/utils/cn'
import { usePathname, useRouter } from '@/utils/i18n/navigation'

interface Props {
    children: React.ReactNode
    defaultValue: string
    label: string
}
export const LocaleSwitchingSelect: NextPage<Props> = ({
    children,
    defaultValue,
    label,
}) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value
        startTransition(() => {
            router.replace(`${pathname}?${searchParams}`, {
                locale: nextLocale,
            })
        })
    }

    return (
        <label
            className={cn(
                'relative text-gray-400',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <p className="sr-only">{label}</p>
            <select
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute right-2 top-[8px]">
                ⌄
            </span>
        </label>
    )
}
