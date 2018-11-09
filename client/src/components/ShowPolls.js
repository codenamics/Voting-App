import map from "lodash/map";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShowPolls = ({ polls }) =>
  map(polls, ({ _id, question }) => (
    <Link to={`/poll/${_id}`} key={_id}>
      {" "}
      <div className="single-poll"> {question} </div>
    </Link>
  ));

export default ShowPolls;

ShowPolls.propTypes = {
  polls: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired
    })
  ).isRequired
};
