import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { vote, deletePoll } from "../store/actions/polls";
import { Pie } from "react-chartjs-2";

const color = () => {
  return (
    "#" +
    Math.random()
      .toString()
      .slice(2, 8)
  );
};

class Poll extends Component {
  constructor(props) {
    super(props);
    this.handlePollDelete = this.handlePollDelete.bind(this);
  }
  handlePollDelete() {
    const { deletePoll, id, history } = this.props;
    deletePoll(id);
    history.push("/home");
  }

  render() {
    const { poll, vote, auth } = this.props;
    console.log(auth.user.id);
    const userIdPoll = poll.user && poll.user._id;
    const userIdAuth = auth.user.id;
    const answers =
      poll.question &&
      poll.options.map(option => (
        <button
          className="vote-btn"
          onClick={() => vote(poll._id, { answer: option.title })}
          key={option._id}
        >
          {option.title}
        </button>
      ));

    const data = poll.options && {
      labels: poll.options.map(option => option.title),
      datasets: [
        {
          label: poll.question,
          backgroundColor: poll.options.map(option => color()),
          borderColor: "#323643",
          data: poll.options.map(option => option.votes)
        }
      ]
    };

    return (
      <div className="flex-basic-column" style={{ margin: "35px 0 0 0" }}>
        <h3>{poll.question}</h3>
        {answers}
        {userIdAuth === userIdPoll ? (
          <button
            className="vote-btn delete-btn"
            onClick={this.handlePollDelete}
          >
            delete
          </button>
        ) : null}

        {poll.options && <Pie data={data} />}
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      poll: state.currentPoll,
      auth: state.auth
    }),
    { vote, deletePoll }
  )(Poll)
);
