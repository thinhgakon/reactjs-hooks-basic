import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleOnChange(e) {
    setValue(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange} />
    </form>
  );
}

export default TodoForm;
