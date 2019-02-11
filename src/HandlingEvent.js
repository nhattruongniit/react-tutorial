import React from 'react';

class HandlingEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      comments: []
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick = (e) => {
    console.log(e.target, this);
  };

  handleClick3(e) {
    console.log(e.target, this);
  };

  render() {
    return (
      <div>
        <h1>This is HandlingEvent component</h1>
        <button onClick={this.handleClick}>Click 1!</button>
        <button onClick={(e) => this.handleClick(e)}>Click 2!</button>
        <button onClick={this.handleClick3.bind(this)}>Click 3!</button>
      </div>
    )
  }
}

export default HandlingEvent;