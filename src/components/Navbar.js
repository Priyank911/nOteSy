// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #000000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  margin-right: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: default;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    margin-top: 5px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #333;
    border-radius: 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AddNoteButton = styled(Link)`
  background: #6a0dad;
  color: white;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: #8b5fbf;
    transform: scale(1.05);
  }
`;

// Divider line below the navbar
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff; // Thin line color
  margin-top: 5px;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Brand>nOteSy</Brand>
        <ButtonWrapper>
          <NavLink to="/">Home</NavLink>
          <AddNoteButton to="/note/new">Add Note +</AddNoteButton>
        </ButtonWrapper>
      </Nav>
      <Divider />
    </>
  );
};

export default Navbar;
