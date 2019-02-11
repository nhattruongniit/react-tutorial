import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>This is Select tag form</h1>
        <select value={value} onChange={this.handleChange}>
          <option value="grape">Grape</option>
          <option value="coconut">Coconut</option>
          <option value="lime">Lime</option>
        </select>
      </div>
    )
  }
}

export default Select;