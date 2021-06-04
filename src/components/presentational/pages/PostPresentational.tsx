import { motion } from 'framer-motion'
import React from 'react'
import PropTypes from 'prop-types'
import { pageVariants } from '../../../utils/animations/animation'
import { PostInterface } from '../../../utils/interfaces/post'
import Footer from '../../container/partials/Footer'
import Header from '../../container/partials/Header'

type Props = {
    post: PostInterface
}
export default function PostPresentational(props:Props) {

    return (
        <>
            <Header/>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                Post Page
            </motion.div>
            <Footer/>
        </>
    )
}

PostPresentational.propTypes = {
    post: PropTypes.object.isRequired
}
