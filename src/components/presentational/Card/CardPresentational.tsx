import React from 'react'
import PropTypes from 'prop-types'
import { PostInterface } from '../../../utils/interfaces/post'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
    post: PostInterface
}
function CardPresentational(props: Props) {

    const { post } = props;

    return (
        <Col md={6}>
            <div className="post_block">
                <div className="post_element">
                    <div className="post_thumbnail">
                        <Link to={`/post/${post.id}`}>
                            <img src="https://source.unsplash.com/random/600x600" alt={post.title} loading="lazy" />
                        </Link>
                    </div>
                    <div className="post_content">
                        <div className="post_user">{post.userId}</div>
                        <Link to={`/post/${post.id}`} className="post_title">{post.title}</Link>
                        <p className="post_description">{post.body}</p>
                        <div className="post_meta"><span className="post_comments"><i className="fa fa-comments"></i><span> 39 comments</span></span></div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

CardPresentational.propTypes = {
    post: PropTypes.object.isRequired
}

export default CardPresentational

