import { motion } from 'framer-motion'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { pageVariants } from '../../../utils/animations/animation'
import { PostInterface } from '../../../utils/interfaces/post'
import Card from '../../container/Card/Card'
import Footer from '../../container/partials/Footer'
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
                                    <Card key={post.id} post={post}/>
                                )
                            })
                        }
                    </Row>
                </Container>

            </motion.div>
            <Footer />

        </>
    )
}
