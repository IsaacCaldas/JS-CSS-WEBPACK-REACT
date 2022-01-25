import '../css/Logo.css';
import logo from '../../assets/images/brasileirao.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => {

  return (

    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>

  )

}