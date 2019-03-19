import React from 'react';

import withMousePosition from './HOC/withMousePosition';

import { MouseRenderProps } from './HOC/MouseRenderProps';

export class MousePosition extends React.Component {
  render() {
    const {
      mousePosition: { x, y }
    } = this.props;

    return (
      <div>
        <h1>Higher-Order Component Method</h1>
        <h2>Move the mouse around!</h2> 
        <p style={{ background: 'orange' }}>
          HOCs the current mouse position is ({x}, {y})
        </p>

        {/* render props */}
        <MouseRenderProps render={(state) => (
          <h1>Render props The mouse position is ({state.x}, {state.y})</h1>
        )}/>
      </div>
    )
  }
};

export const HocWithMouse = withMousePosition(MousePosition);