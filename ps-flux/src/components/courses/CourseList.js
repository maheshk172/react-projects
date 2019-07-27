import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  const renderCourseRow = course => {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
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
          </tr>
        </thead>

        {/* This will work as well, its less code than below
        <tbody>{this.state.courses.map(this.renderCourseRow)}</tbody> 
        */}
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
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
