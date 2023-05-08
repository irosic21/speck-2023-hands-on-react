import React from 'react'
import Section from '../../components/Section/Section'
import Article from '../../components/Article/Article'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import coursesMock from '../../utils/mock/courses';

const CourseArticle = () => {
  const {id} = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      setCourses(coursesMock);
    },1000);
  },[]);

  useEffect(()=>{
    courses && setCourse(courses.find((course) => course.id === parseInt(id)));
  },[courses]);

  return (
    course && (
    <>
      <Section title={course.title}>
          <Article 
            imgSrc = {course.imgSrc}
            imgAlt = {course.imgAlt}
            content = {course.content}
          />
      </Section>
    </>
    )
  )
}

export default CourseArticle