import React from 'react'
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Course from "../../components/Course/Course";

import { Grid, CenteringWrapper } from '../../utils/styles/generalStyles';
import { useEffect, useState } from 'react';
import { InfinitySpin  } from  'react-loader-spinner';
import coursesMock from '../../utils/mock/courses';

const Home = () => {
  const[courses, setCourses] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      setCourses(coursesMock);
    },1000);
  },[]);

  return (
    <>
    <Hero/>
    <Section title="Open your new possibilities"
      subtitle="We recommend that you choose one of the featured courses. If you
      don't find anything for you here, search for courses in detail on
      the courses page."
    >
      {courses ?
      <Grid>
        {courses.map((course, index) => index < 4 && (
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
      </CenteringWrapper>
      }
    </Section>
    </>
  )
}

export default Home