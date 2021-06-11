import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../utils/hooks/UserContext';
import HeaderPresentational from '../../presentational/partials/Header/HeaderPresentational';

type Props = {
    defaultActive: string
}

export default function Header(props: Props): JSX.Element {

    const { user, setUser } = useUserContext();
    const history = useHistory();
    const { defaultActive } = props

    const handleLogout = (e: MouseEvent<HTMLElement>): void => {
        e.preventDefault();

        if (user) {
            setUser(null)
            localStorage.removeItem('user')
            history.push('/')
        }

    }

    return <HeaderPresentational defaultActive={defaultActive} handleLogout={handleLogout} />
}
