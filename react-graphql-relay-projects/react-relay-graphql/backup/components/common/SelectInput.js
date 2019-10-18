import React from "react";
import PropTypes from "prop-types";

const SelectInput = props => {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value || ""}
          onChange={props.onChange}
          className="form-control"
        >
          {/* <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option> */}
          {props.optionValues.map(item => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string
};

SelectInput.defaultProps = {
  error: ""
};

export default SelectInput;
