import React from 'react';

export class MouseRenderProps extends React.Component {
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
      <div 
        style={{ height: '100%' }} 
        onMouseMove={this.handleMouseMove} >
        {this.props.render(this.state)}
      </div>
    )
  }
}