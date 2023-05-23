import React from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { MenuWrapper, MenuItem, HamburgerButton } from "./HamburgerMenuStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const HamburgerMenu = ({ isOpen, toggleMenu, closeMenu, logOut }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  const { isAdmin, isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <HamburgerIcon />
      </HamburgerButton>
      {isOpen && (
        <MenuWrapper>
          {isLoggedIn ? (
            <>
              <MenuItem to="/" onClick={handleLinkClick}>
                Home
              </MenuItem>
              <MenuItem to="/courses" onClick={handleLinkClick}>
                Courses
              </MenuItem>
              {isAdmin && (
                <MenuItem to="/profile" onClick={handleLinkClick}>
                  Profile
                </MenuItem>
              )}
              <MenuItem
                to="/sign-in"
                onClick={() => {
                  logOut();
                  handleLinkClick;
                }}
              >
                Sign out
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem to="/sign-in" onClick={handleLinkClick}>
                Sign In
              </MenuItem>
              <MenuItem to="/register" onClick={handleLinkClick}>
                Register
              </MenuItem>
            </>
          )}
        </MenuWrapper>
      )}
    </>
  );
};

export default HamburgerMenu;
