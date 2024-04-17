import React, { ReactNode, Validator } from 'react'

import _ from 'lodash'
import { NextPage } from 'next'
import PropTypes from 'prop-types'

type PermissionEmun = 'create' | 'update' | 'delete'
interface Props {
    children: React.ReactNode
    permissions: PermissionEmun
}

export const RoleChecker: NextPage<Props> = ({ children, permissions }) => {
    return _.get([], permissions) ? <>{children}</> : null
}

RoleChecker.propTypes = {
    children: PropTypes.node.isRequired as Validator<ReactNode>,
    permissions: PropTypes.oneOf<PermissionEmun>(['create', 'update', 'delete'])
        .isRequired,
}
