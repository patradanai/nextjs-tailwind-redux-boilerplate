'use client'
import React from 'react'

import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const AccordionHeader: NextPage<Props> = ({ children }) => {
    return <div className="cursor-pointer text-center">{children}</div>
}

AccordionHeader.displayName = 'AccordionHeader'

export default AccordionHeader
