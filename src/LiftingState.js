import React from 'react';


const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const BoilingVerdict = ({...props}) => {
  if(props.celsius >= 100) {
    return (
      <div>
        <h3>Enter temperature in {scaleName[props.scale]}</h3>
        <p>The water would boil.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Enter temperature in {scaleName[props.scale]}</h3>
        <p>The water would not boil.</p>
      </div>
    )
  }
};

class LiftingState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: ''
    }
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value })
  };

  render() {
    const { temperature } = this.state;

    return (
      <div>
        <h1>This is LiftingState component</h1>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} scale="f" />
      </div>
    )
  }
}

export default LiftingState;