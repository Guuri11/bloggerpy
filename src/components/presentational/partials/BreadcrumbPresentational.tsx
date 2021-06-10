import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    subtitle: string,
    routes: Array<String>
}

function BreadcrumbPresentational(props: Props) {

    const { title, subtitle, routes } = props

    return (
        <section className="breadcrumb-block" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1200x600)' }}>
            <div className="container g-bg-cover__inner">
                <header className="g-mb-20">
                    <h3 className="h5 g-font-weight-300 g-mb-5">{subtitle}</h3>
                    <h2 className="h1 g-font-weight-300 text-uppercase">{title}</h2>
                </header>

                <ul className="u-list-inline">
                    {
                        routes.map(route => {
                            return (
                                <li className="list-inline-item g-mr-7">
                                    <Link className="u-link-v5 g-color-white g-color-primary--hover" to="#">{route}</Link>
                                    <i className="fa fa-angle-right g-ml-7"></i>
                                </li>
                            )
                        })
                    }

                    
                    <li className="list-inline-item g-color-primary">
                        <span>About Us</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

BreadcrumbPresentational.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    routes: PropTypes.array.isRequired,
}

export default BreadcrumbPresentational

