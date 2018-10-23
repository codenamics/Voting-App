import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";

class Polls extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  handleSelect(id) {
    const { getCurrentPoll } = this.props;
    getCurrentPoll(id);
  }
  render() {
    const { polls, auth, getPolls, getUserPolls } = this.props;

    const allPolls = polls.map(poll => (
      <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
      </li>
    ));
    return (
      <Fragment>
        {auth.isAuthenticated ? (
          <div>
            <button onClick={getPolls}>All Polls</button>
            <button onClick={getUserPolls}>My Polls</button>
          </div>
        ) : null}
        <ul>{allPolls}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
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
