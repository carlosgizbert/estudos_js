import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

const nav = props => 
<aside className="menu-area">
  <nav className='menu'>
    <NavItem url="/" icon="home" pageLabel="Início"/>
    <NavItem url="/users" icon="users" pageLabel="Usuários"/>
  </nav>
</aside>

export default nav 