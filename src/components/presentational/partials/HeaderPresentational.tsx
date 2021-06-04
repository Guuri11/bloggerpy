import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Header/Logo'
import MenuToggle from './Header/MenuToggle'

function HeaderPresentational() {

    const [active, setActive] = useState<string>('home')
    const [toggle, setToggle] = useState<boolean>(false)

    const handleActive = (path:string) :void => {
        setActive(path)
    }

    const handleToggle = () :void => {
        setToggle(!toggle)
    }

    return (
        <header className="main-header container">
            <Logo/>
            <MenuToggle toggle={toggle} handleToggle={handleToggle} />
            <nav className={toggle ? "active" : ""}>
                <ul>
                    <li><Link to='/' onClick={()=>handleActive('home')} className={active === "home" ? "active":""} >Home</Link></li>
                    <li><Link to='/post/1' onClick={()=>handleActive('profile')} className={active === "profile" ? "active":""} >Profile</Link></li>
                </ul>
            </nav>
            <div className="clearfix"></div>
        </header>
    )
}

export default HeaderPresentational

