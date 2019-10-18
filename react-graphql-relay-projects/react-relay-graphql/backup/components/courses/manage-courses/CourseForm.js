import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/SelectInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {/* <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
            onChange={props.onChange}
          />
        </div>
      </div> */}

      <TextInput
        id={"title"}
        name={"title"}
        label={"Title"}
        value={props.course.title}
        error={props.errors.title}
        onChange={props.onChange}
      />

      <SelectInput
        id={"authorId"}
        name={"authorId"}
        label={"Author"}
        value={props.course.authorId}
        error={props.errors.authorId}
        onChange={props.onChange}
        optionValues={[
          {
            id: null,
            name: ""
          },
          {
            id: 1,
            name: "Cory House"
          },
          {
            id: 2,
            name: "Scott Allen"
          }
        ]}
      />

      <TextInput
        id={"category"}
        name={"category"}
        label={"Category"}
        value={props.course.category}
        error={props.errors.category}
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CourseForm;
