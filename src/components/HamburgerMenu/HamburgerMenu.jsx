import React from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { MenuWrapper, MenuItem, HamburgerButton } from "./HamburgerMenuStyle";

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
          <MenuItem to="/" onClick={handleLinkClick}>
            Home
          </MenuItem>
          <MenuItem to="/courses" onClick={handleLinkClick}>
            Courses
          </MenuItem>
          <MenuItem to="/profile" onClick={handleLinkClick}>
            Profile
          </MenuItem>
          <MenuItem to="/sign-in" onClick={handleLinkClick}>
            Sign In
          </MenuItem>
          <MenuItem to="/register" onClick={handleLinkClick}>
            Register
          </MenuItem>
        </MenuWrapper>
      )}
    </>
  );
};

export default HamburgerMenu;
