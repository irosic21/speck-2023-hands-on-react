import { Section as SectionWrapper, SectionInner, SectionTitle, SectionSubtitle } from './SectionStyle';

import React from 'react'
import propTypes from "prop-types"

const Section = ({title,subtitle,children}) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        {children}
      </SectionInner>
    </SectionWrapper>
  )
}

Section.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string,
    children: propTypes.node
}

export default Section