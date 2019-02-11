import React from 'react';

const names = [
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
]
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