import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      post: [],
      comments: []
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   date: new Date();
    // });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>This is Clock component</h1>
        <h3>It is {date.toLocaleTimeString()}.</h3>
      </div>
    )
  }
}

export default Clock;