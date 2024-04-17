import React from 'react'

import { NextPage } from 'next'

/**
 *
 * ButtonGroup
 *
 */

interface Props {
    children?: React.ReactNode
}

const ButtonGroup: NextPage<Props> = ({ children }) => {
    return <div className="inline-flex rounded-md shadow-sm">{children}</div>
}

export default ButtonGroup
