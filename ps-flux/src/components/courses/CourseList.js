import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  // const onDeleteCourse = course => {
  //   //debugger;
  //   deleteCourse(course.id).then(responseData => {
  //     console.log("Course Deleted :" + responseData);
  //   });
  // };

  const renderCourseRow = course => {
    return (
      <tr key={course.id}>
        <td>
          <Link to={"/course/" + course.slug}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>category</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* This will work as well, its less code than below
        <tbody>{this.state.courses.map(this.renderCourseRow)}</tbody> 
        */}
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.onDeleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// CourseList.propTypes = {
//   courses: PropTypes.array.isRequired
// };

CourseList.propTypes = {
  onDeleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;
