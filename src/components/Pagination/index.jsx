import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page } = pagination;

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div>
      <span
        onClick={() => handlePageChange(_page - 1)}
        style={{ marginRight: "10px", cursor: "pointer" }}
      >
        Prev
      </span>
      <span
        onClick={() => handlePageChange(_page + 1)}
        style={{ cursor: "pointer" }}
      >
        Next
      </span>
    </div>
  );
}

export default Pagination;
