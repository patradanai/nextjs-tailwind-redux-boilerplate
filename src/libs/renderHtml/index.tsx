'use client'
import { FC } from 'react'

import DOMPurify from 'isomorphic-dompurify'

import { cn } from '@/utils/cn'

interface Props {
    html: string
    className?: string
}

const RenderHtml: FC<Props> = ({ html, className }) => {
    const sanitizedData = (data: string) => ({
        __html: DOMPurify.sanitize(data),
    })

    return (
        <div
            className={cn(
                'font-sarabun prose-headings:text-yellow-500 prose-ul:flex-col prose-h1:text-3xl prose-h1:md:text-5xl prose-h2:mt-5 prose mb-5 max-w-none text-white prose-h2:mb-5 prose-p:my-0 prose-p:text-base prose-p:text-white prose-strong:text-[#FEC066] prose-img:mx-auto',
                className
            )}
        >
            <div dangerouslySetInnerHTML={sanitizedData(html)} />
        </div>
    )
}

export default RenderHtml
