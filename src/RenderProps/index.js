import React, { useState } from "react";

const Mouse = props => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = event => {
    const { clientX, clientY } = event;
    setPosition({
      x: clientX,
      y: clientY
    });
  };

  return (
    <div
      style={{ height: "300px", border: "1px solid #f00" }}
      onMouseMove={handleMouseMove}
    >
      {props.render(position)}
    </div>
  );
};

const RenderProps = () => {
  return (
    <div>
      <h1>
        Render props không phải là một API của React, mà là một kĩ thuật xử lý
        việc chia sẻ logic giữa các React Component bằng cách sử dụng prop có
        value như một function
      </h1>
      <Mouse
        render={({ x, y }) => {
          return (
            <h3>
              the mouse position is {x}, {y}
            </h3>
          );
        }}
      />
    </div>
  );
};

export default RenderProps;
