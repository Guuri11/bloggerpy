import React from 'react'
import PropTypes from 'prop-types'
import BreadcrumbPresentational from '../../presentational/partials/BreadcrumbPresentational'

type Props = {
    title: string,
    subtitle: string,
    routes: Array<String>
}

function Breadcrumb(props: Props) {
    return (
        <BreadcrumbPresentational title={props.title} subtitle={props.subtitle} routes={props.routes} />
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    routes: PropTypes.array.isRequired,
}

export default Breadcrumb

