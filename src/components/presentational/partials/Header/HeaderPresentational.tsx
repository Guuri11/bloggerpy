import React, { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../../../utils/hooks/UserContext'
import Logo from './Logo'
import MenuToggle from './MenuToggle'

type Props = {
    handleLogout: (e: MouseEvent<HTMLElement>) => void
}

function HeaderPresentational(props: Props) {

    const [active, setActive] = useState<string>('home')
    const [toggle, setToggle] = useState<boolean>(false)
    const { user } = useUserContext();

    const { handleLogout } = props

    const handleActive = (path: string): void => {
        setActive(path)
    }

    const handleToggle = (): void => {
        setToggle(!toggle)
    }

    return (
        <header className="main-header">
            <div className="container">
                <Logo />
                <MenuToggle toggle={toggle} handleToggle={handleToggle} />
                <nav className={toggle ? "active" : ""}>
                    <ul>
                        <li><Link to='/' onClick={() => handleActive('home')} className={active === "home" ? "active" : ""} >Home</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to='/profile' onClick={() => handleActive('profile')} className={active === "profile" ? "active" : ""} >Profile</Link></li>
                                    <li><span onClick={handleLogout}>Logout</span></li>
                                </>
                                :
                                <li><Link to='/login' onClick={() => handleActive('profile')} className={active === "profile" ? "active" : ""} >Log in</Link></li>
                        }
                    </ul>
                </nav>
                <div className="clearfix"></div>
            </div>
        </header>
    )
}

export default HeaderPresentational

