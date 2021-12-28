import './Logo.css'
import React from 'react'
import logoIMG from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'

const logo = props => 
<aside className="logo">
  <Link to="/" className="logo">
  <img src={logoIMG} alt="Logo" />
  </Link>
</aside>

export default logo 