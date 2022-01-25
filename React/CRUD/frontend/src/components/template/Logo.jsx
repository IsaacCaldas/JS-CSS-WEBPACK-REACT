import '../css/Logo.css';
import logo from '../../assets/images/brasileirao.png';
import React from 'react';

export default props => {

  return (

    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
    </aside>

  )

}