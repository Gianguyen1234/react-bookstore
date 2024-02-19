// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex between">
          <Link to="/" className="text-white mr-4">Home</Link>
        </div>
      </nav>
    );
  };

export default Navbar;
