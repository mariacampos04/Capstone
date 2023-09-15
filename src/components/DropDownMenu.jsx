import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>  
      </div>
    </div>
  );
}

export default DropdownMenu;