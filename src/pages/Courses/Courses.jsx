import React from 'react'
import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid';
import Course from '../../components/Course/Course';

import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg5 from "../../assets/images/lecture-5.jpg";

const Courses = () => {
  return (
    <Section title="Browse our all courses"
        subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
    >
        <Grid>
            <Course imgSrc={LectureImg1} imgAlt="Introduction" title="Introduction" subtitle="Get to know us better..." time="60 min" />
            <Course imgSrc={LectureImg2} imgAlt="HTML & CSS" title="HTML & CSS" subtitle="Learn HTML & CSS basics..." time="100 min" />
            <Course imgSrc={LectureImg3} imgAlt="Version Control Systems" title="Version Control Systems" subtitle="Learn GIT and Gitflow basics..." time="90 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />

            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
            <Course imgSrc={LectureImg5} imgAlt="Advanced CSS" title="Advanced CSS" subtitle="BEM methodology, grid, flex..." time="120 min" />
        </Grid>
    </Section>
  );
};

export default Courses