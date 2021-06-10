import React, { MouseEvent } from 'react'
import PropTypes from 'prop-types'
import { PostInterface } from '../../../utils/interfaces/post'
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { useUserContext } from '../../../utils/hooks/UserContext';

type Props = {
    post: PostInterface,
    handleDelete: (e: MouseEvent<HTMLElement>)=> void
}

function CardPresentational(props: Props) {

    const { user } = useUserContext();
    const { post, handleDelete } = props;

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
            <div className="card-utils">
                {
                    user && post.userId === user.id ?
                        <div className="delete">
                            <Button variant="danger" onClick={handleDelete}>
                                <span className="fas fa-trash"></span> Delete
                            </Button>
                        </div>
                        :
                        null
                }
            </div>
        </motion.article>
    )
}

CardPresentational.propTypes = {
    post: PropTypes.object.isRequired
}

export default CardPresentational

