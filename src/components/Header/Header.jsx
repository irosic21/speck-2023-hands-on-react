import { useState } from "react";
import { Button } from "../../utils/styles/generalStyles";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  LogoImg,
  HeaderLink,
  HeaderNav,
} from "./HeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const toggleMenu = () => {
    console.log("Klikno sam hamburger");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logOut = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsAdmin(false);
    localStorage.removeItem("jwt_token");
    const isItemRemoved = localStorage.getItem("jwt_token") === null;
    console.log(isItemRemoved);
    localStorage.removeItem("is_admin");
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Hamburger>
          <HamburgerMenu
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            logOut={logOut}
          />
        </Hamburger>
        {isLoggedIn ? (
          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/courses">Courses</HeaderLink>
            {isAdmin && <HeaderLink to="/profile">Profile</HeaderLink>}
            <Button
              onClick={() => {
                logOut();
                navigate("/sign-in");
              }}
            >
              Sign out
            </Button>
          </HeaderNav>
        ) : (
          <HeaderNav>
            <Button onClick={() => navigate("/sign-in")} isOutline>
              Sign in
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </HeaderNav>
        )}
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
