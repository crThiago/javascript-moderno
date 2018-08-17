import './Logo.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom' // Link serve para criar redirecionamento de página igual tag a html

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>