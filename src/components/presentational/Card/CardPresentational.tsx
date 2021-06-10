import React from 'react'
import PropTypes from 'prop-types'
import { PostInterface } from '../../../utils/interfaces/post'
import { motion } from 'framer-motion';

type Props = {
    post: PostInterface
}

function CardPresentational(props: Props) {

    const { post } = props;

    return (
        <motion.article
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="card-block">
            <div className="card-user">
                <span className="fas fa-user"></span> User {post.userId}
            </div>
            <div className="card-title">
                <h3>{post.title}</h3>
            </div>
            <div className="card-body">
                <img src="https://source.unsplash.com/random/300x150" alt={post.title} className="img-fluid" />
                <p>{post.body}</p>
            </div>
            <div className="card-comments">
                <div className="comments">
                    <span className="fas fa-comments"></span> 12
                </div>
            </div>
        </motion.article>
    )
}

CardPresentational.propTypes = {
    post: PropTypes.object.isRequired
}

export default CardPresentational

