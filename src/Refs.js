import React from 'react';

const CustomTextInput = ({...props}) => {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
};

class Refs extends React.Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    console.log('refs', this.inputElement);
  }

  render() {
    return (
      <div>
        <h1>This is Refs component</h1>
        <CustomTextInput inputRef={this.inputElement} />
      </div>
    )
  }
}

export default Refs;