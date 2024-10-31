import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="brand">
          <img src="./Notesy.png" alt="nOteSy Logo" className="logo" />
        </div>
        <div className="button-wrapper">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/note/new" className="add-note-button">Add Note +</Link>
        </div>
      </nav>
      <div className="divider"></div>
    </>
  );
};

export default Navbar;
