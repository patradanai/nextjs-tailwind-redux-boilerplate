'use client'
import React from 'react'

import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const AccordionDetail: NextPage<Props> = ({ children }) => {
    return <div>{children}</div>
}

AccordionDetail.displayName = 'AccordionDetail'

export default AccordionDetail
