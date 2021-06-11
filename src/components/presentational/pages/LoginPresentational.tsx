import { motion } from 'framer-motion'
import React, { ChangeEvent, MouseEvent } from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { pageVariants } from '../../../utils/animations/animation'
import Header from '../../container/partials/Header'

type Props = {
    error: Boolean,
    handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: MouseEvent<HTMLElement>) => void
    submited: Boolean
}

export default function LoginPresentational(props: Props) {

    const { handleChangeEmail, handleSubmit, submited, error } = props

    return (
        <>
            <Header defaultActive="login" />
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >

                <div className="container login-container">
                    <div className="login-form-1">
                        <h3>Iniciar sesión</h3>
                        {
                            submited ?
                                error ?
                                    <Alert variant={"danger"} className="text-center" >
                                        User not found!
                                    </Alert>
                                    :
                                    <div className="login-spinner">
                                        <Spinner animation="border" variant="primary" className="color-primary login-spinner" />
                                    </div>
                                :
                                null
                        }

                        <Form onSubmit={(event)=> event.preventDefault()}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} value="Sincere@april.biz" />
                            </Form.Group>
                            <Button variant="primary" onClick={handleSubmit} className="mt-3 primary-background-color">
                                Submit
                            </Button>
                        </Form>

                    </div>
                </div>

            </motion.div>

        </>
    )
}
