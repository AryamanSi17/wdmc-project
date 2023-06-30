import React from 'react'
import './navbar.css'
import {Link,NavLink} from 'react-router-dom'
import {links} from '../data'
import Logo from '../images/logoo.jpg'

function Navbar() {

  return (
    <nav>
    <div className='container nav_container'>
    <Link to ="/" className='logo'>
        <img src={Logo} alt="nav-logo"/>
    </Link>

    <ul className='nav_links'>
        {
            links.map(({name,path},index)=>{
                return(
                    <li>
                        <NavLink to={path} key={index}>{name}</NavLink>
                    </li>
                )
            }
            )
        }
    </ul>

    </div>

    </nav>
  )
}

export default Navbar
