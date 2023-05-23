import {
  Section as SectionWrapper,
  SectionInner,
  SectionTitle,
  SectionSubtitle,
  SectionTitleWrapper,
} from "./SectionStyle";
import React from "react";
import propTypes from "prop-types";

const Section = ({ title, subtitle, children, secondChildren }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        {secondChildren === undefined ? (
          <SectionTitle>{title}</SectionTitle>
        ) : (
          <SectionTitleWrapper>
            <SectionTitle isProfile>{title}</SectionTitle>
            {secondChildren}
          </SectionTitleWrapper>
        )}
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  children: propTypes.node,
  secondChildren: propTypes.node,
};

export default Section;
