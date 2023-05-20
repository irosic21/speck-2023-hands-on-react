import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Section from '../../components/Section/Section';
import { CenteringWrapper, Grid } from '../../utils/styles/generalStyles';
import Course from '../../components/Course/Course';
import { InfinitySpin } from 'react-loader-spinner';
import coursesMock from '../../utils/mock/courses';

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(null);

  const handleSearch = (value) => {
    if (!courses) return;

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setFilteredCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <Section
      title="Browse our all courses"
      subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
    >
      <CenteringWrapper>
        <SearchBar
          placeholder="Search courses"
          disabled={!courses}
          onValueChange={handleSearch}
        />
      </CenteringWrapper>

      {courses || filteredCourses ? (
        <Grid>
          {filteredCourses.map((course) => (
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
        </Grid>
      ) : (
        <div>
          <CenteringWrapper>
            <InfinitySpin />
          </CenteringWrapper>
        </div>
      )}
    </Section>
  );
};

export default Courses;
