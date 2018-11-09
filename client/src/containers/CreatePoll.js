import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createPoll, getPolls } from "../store/actions";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [""]
    };
  }
  componentWillUnmount() {
    const { getPolls } = this.props;
    getPolls();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAnswer = (e, index) => {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({
      options
    });
  };
  addAnswer = () => {
    this.setState({
      options: [...this.state.options, ""]
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { createPoll, history } = this.props;
    createPoll(this.state);
    history.push("/home");
  };
  render() {
    const options = this.state.options.map((option, i) => (
      <Fragment key={i}>
        <label htmlFor=""> Answer </label>{" "}
        <input
          type="text"
          value={option}
          onChange={e => this.handleAnswer(e, i)}
        />{" "}
      </Fragment>
    ));

    return (
      <div className="flex-basic-n90">
        <form className="new-poll" onSubmit={this.handleSubmit}>
          <label htmlFor="question"> Question </label>{" "}
          <input
            type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
          />{" "}
          {options}{" "}
          <button type="button" onClick={this.addAnswer}>
            Add answer{" "}
          </button>{" "}
          <button type="submit"> Submit </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    {
      createPoll,
      getPolls
    }
  )(CreatePoll)
);
