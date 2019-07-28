import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
// import { Prompt } from "react-router-dom";
import * as courseApi from "../../../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  });

  // const handleTitleChange = event => {
  //   //debugger;
  //   const updatedCourse = { ...course };
  //   updatedCourse.title = event.target.value;
  //   setCourse(updatedCourse);
  //   console.log(1);
  // };

  // const handleCategoryChange = event => {
  //   //debugger;
  //   // lets use spread operator with updatd prop
  //   const updatedCourse = { ...course, category: event.target.value };
  //   //updatedCourse.category = event.target.value;
  //   setCourse(updatedCourse);
  //   console.log(2);
  // };

  // const handleAuthorChange = event => {
  //   //debugger;
  //   const updatedCourse = { ...course, authorId: event.target.value };
  //   setCourse(updatedCourse);
  //   console.log(3);
  // };

  useEffect(() => {
    const slug = props.match.params.slug; // /course/:slug
    if (slug) {
      courseApi
        .getCourseBySlug(slug)
        .then(setCourse)
        .catch(error => {
          const errorMessage = "Unable to fetch Course by slug: " + error;
          console.log(errorMessage);
          toast.error(errorMessage);
        });
    }
  }, [props.match.params.slug]);

  const handleInputChange = event => {
    //This should have worked as well
    //const updatedCourse = { ...course, [event.target.name]: event.target.value };
    const updatedCourse = { ...course };
    updatedCourse[event.target.name] = event.target.value;
    setCourse(updatedCourse);
  };

  const isFormValid = () => {
    debugger;
    const _errors = [];
    if (course.title === "") _errors["title"] = "Title is required";
    if (course.category === "") _errors["category"] = "Category is required";
    if (course.authorId === null) _errors["authorId"] = "Author is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    //debugger;
    event.preventDefault();
    if (isFormValid()) {
      courseApi.saveCourse(course).then(() => {
        props.history.push("/courses");
        toast.success("Course has been saved.");
      });
    } else {
      toast.warn("All the fields are mandatory");
      return;
    }
  };

  return (
    <>
      {/* <Prompt when={true} message="You you want to leave ?" /> */}
      {/* <p>{props.match.params.slug}</p>
      <p>{props.location.query}</p>
      <p>{props.location.pathname}</p> */}

      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
