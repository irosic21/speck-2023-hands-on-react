import {Course as CourseWrapper, CourseFigure, CourseImg, CourseTitle, CourseSubtitle, CourseTime} from './CourseStyle'

import React from 'react'
import PropTypes from 'prop-types'

const Course = ({imgSrc, imgAlt, title, subtitle, time, id}) => {
  return (
    <CourseWrapper to={`/courses/${id}`}>
      <CourseFigure>
        <CourseImg src={imgSrc} alt={imgAlt}/>
      </CourseFigure>
      <CourseTitle>{title}</CourseTitle>
      <CourseSubtitle>{subtitle}</CourseSubtitle>
      <CourseTime>{time}</CourseTime>
    </CourseWrapper>
  )
}

Course.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.number
}

export default Course