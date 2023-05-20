import React from 'react'
import Section from '../../components/Section/Section';
import { Grid, CenteringWrapper } from '../../utils/styles/generalStyles';
import Course from '../../components/Course/Course';
import { useEffect, useState } from 'react';
import coursesMock from '../../utils/mock/courses';
import { InfinitySpin  } from  'react-loader-spinner';

const Courses = () => {
  const[courses, setCourses] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      setCourses(coursesMock);
    },1000);
  },[]);
  return (
    <Section title="Browse our all courses"
        subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
    >
        {courses ?
      <Grid>
        {courses.map((course) =>(
          <Course 
            key={course.id}
            imgSrc={course.imgSrc} 
            imgAlt={course.imgAlt} 
            title={course.title} 
            subtitle={course.subtitle} 
            time={course.time}
            id={course.id}
          />
        ))}
      </Grid>:
      <CenteringWrapper>
        <InfinitySpin/>
      </CenteringWrapper>}
    </Section>
  );
};

export default Courses