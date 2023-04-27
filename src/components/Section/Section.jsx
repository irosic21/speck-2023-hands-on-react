import React from 'react'
import PropTypes from "prop-types"
import "./Section.scss"

const Section = ({title,subtitle,children}) => {
  return (
    <section className="Section">
        <div className="Section-Inner">
          <h2 className="Section-Title">{title}</h2>
          <p className="Section-Subtitle">
            {subtitle}
          </p>
        </div>
        {children}
      </section>
  )
}

Section.PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
}

export default Section