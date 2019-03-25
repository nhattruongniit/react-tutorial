import React from 'react';

class Curry extends React.Component {
  state  = {
    username: '',
    email: '',
  }

  handleOnChange = key => event => {
    const { target: { value } } = event;
    const cloned = {...this.state};
    cloned[key] = value;
    this.setState({...cloned});
  }

  render() {
    const {
      state: { username, email },
      handleOnChange,
    } = this;
    
    return (
      <div>
        Username: <br />
        <input type="text" onChange={handleOnChange('username')}/>
        <br /><br />
        Email: <br />
        <input type="text" onChange={handleOnChange('email')}/>
        <br /> <br />
        Result: <br />
        username: {username} <br/ >
        email: {email}
      </div>
    )
  }
}

export default Curry;