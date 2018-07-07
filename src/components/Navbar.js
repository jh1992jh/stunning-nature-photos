import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Stunning nature photos</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
