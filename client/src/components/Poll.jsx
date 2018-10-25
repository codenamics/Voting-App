import React, { Component } from "react";
import { connect } from "react-redux";
import { vote } from "../store/actions";
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
  render() {
    const { poll, vote } = this.props;
    const answers =
      poll.question &&
      poll.options.map(option => (
        <button
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
      <div>
        <h3>{poll.question}</h3>
        <p>{answers}</p>
        {poll.options && <Pie data={data} />}
      </div>
    );
  }
}

export default connect(
  state => ({
    poll: state.currentPoll
  }),
  { vote }
)(Poll);
