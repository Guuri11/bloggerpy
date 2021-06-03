import React, { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'


function HeaderPresentational() {

    const [active, setActive] = useState<string>('home')

    const handleActive = (path:string) :void => {
        setActive(path)
    }

    return (
        <header>
            <Link to='/'>Logo</Link>
            <div className="menu-toggle"></div>
            <nav>
                <ul>
                    <li><Link to='/' onClick={()=>handleActive('home')} className={active === "home" ? "active":""} >Home</Link></li>
                    <li><Link to='/' onClick={()=>handleActive('about')} className={active === "about" ? "active":""} >About Bloggerpy</Link></li>
                    <li><Link to='/' onClick={()=>handleActive('profile')} className={active === "profile" ? "active":""} >Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPresentational

