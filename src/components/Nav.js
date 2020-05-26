import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  
    const navStyle = {
        'color': 'white',
        'text-decoration': 'none'
    }
  
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/forgotPassword">
                <li>Forogt Password</li>
            </Link>
            <Link style={navStyle} to="/signIn">
                <li>Sign In</li>
            </Link>
        </ul>
      </nav>
  );
}

export default Nav;