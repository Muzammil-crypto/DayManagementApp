import React, { Component } from "react";

class Form extends Component {
  heading = {
    textAlign: "center",
  };
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      comments: "",
      Topic: "React",
    };
  }
  HandleUserNameChange = (event) => {
    this.setState({
      Username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleTopicChangeValue = (event) => {
    this.setState({ Topic: event.target.value });
  };
  handleSubmit = () => {
    alert(
      `The User: ${this.state.Username}, has commented " ${this.state.comments}" on the topic ${this.state.Topic}`
    );
  };
  render() {
    return (
      <div className="primery">
        <div>Form Component</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.Username}
              onChange={this.HandleUserNameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentChange}
            ></textarea>
            <div>
              <label>Topic</label>
              <select
                value={this.state.Topic}
                onChange={this.handleTopicChangeValue}
              >
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Flutter">Flutter</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
