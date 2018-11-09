import isEmpty from "lodash/isEmpty";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";
import NoPolls from "../components/NoPolls";
import ShowPolls from "../components/ShowPolls";

class Polls extends PureComponent {
  componentDidMount = () => this.props.getPolls();

  render = () => (
    <div>
      <button className="polls-btn" onClick={this.props.getPolls}>
        All Polls
      </button>
      <button className="polls-btn" onClick={this.props.getUserPolls}>
        My Polls
      </button>
      {isEmpty(this.props.polls) ? <NoPolls /> : <ShowPolls {...this.props} />}
    </div>
  );
}

const mapStateToProps = state => ({
  polls: state.polls
});

export default connect(
  mapStateToProps,
  {
    getPolls,
    getUserPolls,
    getCurrentPoll
  }
)(Polls);

Polls.propTypes = {
  getPolls: PropTypes.func.isRequired,
  getUserPolls: PropTypes.func.isRequired,
  getCurrentPoll: PropTypes.func.isRequired
};
