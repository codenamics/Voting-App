import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { createPoll } from "../store/actions";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [""]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }
  addAnswer() {
    this.setState({ options: [...this.state.options, ""] });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { createPoll } = this.props;
    createPoll(this.state);
  }
  render() {
    const options = this.state.options.map((option, i) => (
      <Fragment key={i}>
        <label htmlFor="">option</label>
        <input
          type="text"
          value={option}
          onChange={e => this.handleAnswer(e, i)}
        />
      </Fragment>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />
        {options}
        <button type="button" onClick={this.addAnswer}>
          Add option
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { createPoll }
)(CreatePoll);
