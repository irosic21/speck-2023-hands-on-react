import React from 'react'
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Course from "../../components/Course/Course";
import Grid from "../../components/Grid/Grid";

import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg5 from "../../assets/images/lecture-5.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Hero/>
    <Section title="Open your new possibilities"
      subtitle="We recommend that you choose one of the featured courses. If you
      don't find anything for you here, search for courses in detail on
      the courses page."
    >
      <Grid>
        <Link to="/Course">
          <Course imgSrc={LectureImg1} imgAlt="Introduction" title="Introduction" subtitle="Get to know us better..." time="60 min" />
        </Link>
        <Course imgSrc={LectureImg2} imgAlt="HTML & CSS" title="HTML & CSS" subtitle="Learn HTML & CSS basics..." time="100 min" />
        <Course imgSrc={LectureImg3} imgAlt="Version Control Systems" title="Version Control Systems" subtitle="Learn GIT and Gitflow basics..." time="90 min" />
        <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
      </Grid>
    </Section>
    </>
  )
}

export default Home