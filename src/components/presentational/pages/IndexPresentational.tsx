import { motion } from 'framer-motion'
import React, { ChangeEvent } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { pageVariants } from '../../../utils/animations/animation'
import { PostInterface } from '../../../utils/interfaces/post'
import Card from '../../container/Card/Card'
import Header from '../../container/partials/Header'

type Props = {
    posts: PostInterface[],
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void

}

export default function IndexPresentational(props: Props) {

    const { posts, handleSearch } = props

    return (
        <>
            <Header defaultActive="home" />
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >

                <Container>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Search post" onChange={handleSearch} />
                        </Form.Group>
                    </Form>

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
