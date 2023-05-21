import React from 'react';
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { MenuWrapper, MenuItem, HamburgerButton} from './HamburgerMenuStyle';

const HamburgerMenu = ({ isOpen, toggleMenu, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <HamburgerIcon />
      </HamburgerButton>
      {isOpen && (
        <MenuWrapper>
          <MenuItem to="/" onClick={handleLinkClick}>Home</MenuItem>
          <MenuItem to="/Courses" onClick={handleLinkClick}>Courses</MenuItem>
          <MenuItem to="/SignIn" onClick={handleLinkClick}>Sign In</MenuItem>
          <MenuItem to="/Register" onClick={handleLinkClick}>Register</MenuItem>
        </MenuWrapper>
      )}
    </>
  );
};

export default HamburgerMenu;
