import { motion } from 'framer-motion';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { pageVariants } from '../../../utils/animations/animation';
import { useUserContext } from '../../../utils/hooks/UserContext'
import { PostInterface } from '../../../utils/interfaces/post';
import Card from '../../container/Card/Card';
import Header from '../../container/partials/Header';

type Props = {
    posts: PostInterface[]
}
export default function ProfilePresentational(props: Props) {

    const { posts } = props
    const { user } = useUserContext();

    return (
        <>
            <Header />
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >

                {
                    user ?
                        <div className="container">
                            <div className="px-4 py-3">
                                <h3 className="mb-3">Hi {user.username}!</h3>
                                <div className="p-4 rounded shadow-sm">
                                    <h5>Your data</h5>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Username:</strong> {user.username}</p>
                                </div>

                                <div className=" mt-3 p-4 shadow-sm rounded">
                                    <h5>Your posts</h5>
                                    <Row>
                                        {
                                            posts.map(post => {
                                                return (
                                                    <Col key={post.id} md={4}>
                                                        <Card post={post} />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>

                                </div>
                            </div>
                        </div>
                        :
                        null
                }


            </motion.div>

        </>
    )
}
