import React from 'react';

class ListKeys extends React.Component {
  componentDidMount() {
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div>
        <h1>This is ListKeys component</h1>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

export default ListKeys;