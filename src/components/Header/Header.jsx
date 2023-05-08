import { Button } from "../../utils/styles/generalStyles";
import {Header as HeaderWrapper, HeaderInner, Hamburger, LogoImg, HeaderLink, HeaderNav} from "./HeaderStyle"
import { Link, useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();

    return(
        <HeaderWrapper>
            <HeaderInner>
                <Link to="/">
                    <LogoImg/>
                </Link>
                <Hamburger/>
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