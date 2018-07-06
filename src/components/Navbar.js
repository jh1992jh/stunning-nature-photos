import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Brand</h3>
      </Link>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </nav>
  );
};

export default Navbar;
