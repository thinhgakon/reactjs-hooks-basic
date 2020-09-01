import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  function handleOnChange(e) {
    setSearchTerm(e.target.value);
    if (!onSubmit) return;

    const formValues = {
      searchTerm: e.target.value,
    };
    onSubmit(formValues);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          id=""
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default PostFiltersForm;
