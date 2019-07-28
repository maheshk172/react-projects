import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  // By sending blank array, we only make one call. If no field or
  // courses provided will make infinite calls
  useEffect(() => {
    getCourses()
      .then(_courses => setCourses(_courses))
      .catch(err => console.log("Error fetching course: ", err));
  }, []);

  return (
    <>
      <h2> Courses </h2>
      <Link to="/course" className="btn btn-primary">
        Create Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
