import { useState } from "react";
import { Button } from "../../utils/styles/generalStyles";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {Header as HeaderWrapper, HeaderInner, Hamburger, LogoImg, HeaderLink, HeaderNav} from "./HeaderStyle"
import { Link, useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Klikno sam hamburger");
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <HeaderWrapper>
            <HeaderInner>
                <Link to="/">
                    <LogoImg/>
                </Link>
                <Hamburger>
                    <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}/>
                </Hamburger>
                <HeaderNav>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/Courses">Courses</HeaderLink>
                    <Button onClick={()=>navigate("/Register")}>Register</Button>
                </HeaderNav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;