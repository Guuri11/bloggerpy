import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { useUserContext } from '../../../utils/hooks/UserContext';
import HeaderPresentational from '../../presentational/partials/Header/HeaderPresentational';

export default function Header(): JSX.Element {

    const { user, setUser } = useUserContext();
    const history = useHistory();

    const handleLogout = (e: MouseEvent<HTMLElement>): void => {
        e.preventDefault();

        if (user) {
            setUser(null)
            localStorage.removeItem('user')
            history.push('/')
        }

    }

    return <HeaderPresentational handleLogout={handleLogout} />
}
