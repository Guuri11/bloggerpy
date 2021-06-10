import { motion } from 'framer-motion'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { pageVariants } from '../../../utils/animations/animation'
import { PostInterface } from '../../../utils/interfaces/post'
import Card from '../../container/Card/Card'
import Header from '../../container/partials/Header'

type Props = {
    posts: PostInterface[]
}

export default function IndexPresentational(props: Props) {

    const { posts } = props

    return (
        <>
            <Header />
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >

                <Container>
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
                </Container>

            </motion.div>

        </>
    )
}
