import React from 'react';

function withMousePosition(WrappedComponent) {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          mousePosition={this.state}
        />
      )
    }
  }
}

export default withMousePosition;
