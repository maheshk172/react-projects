import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { getCourses } from "../../api/courseApi";
import courseStore from "../../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  // By sending blank array, we only make one call. If no field or
  // courses provided will make infinite calls
  useEffect(() => {
    // getCourses()
    //   .then(_courses => setCourses(_courses))
    //   .catch(err => console.log("Error fetching course: ", err));
    //setCourses(courseStore.getCourses());
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      console.log("calling loadCourses");
      loadCourses();
    }

    //Unmount when component unmounts
    return () => {
      courseStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2> Courses </h2>
      <Link to="/course" className="btn btn-primary">
        Create Course
      </Link>
      <CourseList courses={courses} onDeleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
