import {Hero as HeroWrapper, HeroFigure, HeroImg as HeroImgWrapper, HeroOverlay, HeroContent, HeroContentInner, HeroTextCard, HeroTitle, HeroSubtitle } from './HeroStyle';

import HeroImg from "../../assets/images/landing.jpg"
import { Button } from "../../utils/styles/generalStyles";
import { Link, useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();

    return (
        <HeroWrapper>
            <HeroFigure>
                <HeroImgWrapper src={HeroImg} alt='Speck Academy hero'/>
            </HeroFigure>
            <HeroOverlay/>
            <HeroContent>
                <HeroContentInner>
                    <HeroTitle>
                        Speck Academy 2023 powered by FOI
                    </HeroTitle>
                    <HeroSubtitle>
                        Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT practice.
                    </HeroSubtitle>
                    <Button onClick={()=>navigate("/Courses")}>Explore courses</Button>
                </HeroContentInner>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;
