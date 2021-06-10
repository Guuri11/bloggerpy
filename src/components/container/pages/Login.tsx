import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Redirect } from 'react-router'
import { useUserContext } from '../../../utils/hooks/UserContext'
import { UserInterface } from '../../../utils/interfaces/user'
import LoginPresentational from '../../presentational/pages/LoginPresentational'

export default function Login() {

    const [email, setEmail] = useState<string>("Sincere@april.biz")
    const [submited, setSubmited] = useState<Boolean>(false)
    const [error, setError] = useState<Boolean>(false)
    const [success, setSuccess] = useState<Boolean>(false)
    const { user, setUser } = useUserContext();

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();

        // reinitialize states
        setSubmited(false)
        setError(false)

        setSubmited(true)
        await fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(data => {
            const users: Array<UserInterface> = data;

            const userFounded: UserInterface | undefined = users.find(userItem => userItem.email === email)

            if (userFounded) {
                localStorage.setItem('user', JSON.stringify(userFounded))
                setUser(userFounded)
                setSuccess(true)
            } else setError(true)
        })

    }

    if (success || user) {
        return <Redirect to="/" />
    } else return (
        <LoginPresentational
            error={error}
            handleChangeEmail={handleChangeEmail}
            handleSubmit={handleSubmit}
            submited={submited}
        />
    )
}
