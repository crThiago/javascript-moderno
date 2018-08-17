import './Nav.css'
import React from 'react'
import NavItems from './NavItems'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItems icon="home" link="#" item="Início" />
            <NavItems icon="users" link="Users" item="Usuário" />
        </nav>
    </aside>