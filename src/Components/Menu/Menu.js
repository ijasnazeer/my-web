import React from 'react';
import './Menu.css';
import MyImage from './IMG_4535.JPG';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='menu'>
      <div className='image-container'>
      <img src={MyImage} alt='profile' />
      </div>
      <div className="links">
        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/About">About</Link>
        {/* <Link className="link" to="/Resume">Resume</Link> */}
        {/* <Link className="link" to="/">portfolio</Link> */}
        {/* <Link className="link" to="/">Services</Link> */}
        <Link className="link" to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Menu;
