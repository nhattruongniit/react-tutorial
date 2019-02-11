import React from 'react';

const UserGreeting = () => {
  return <h3>Welcome back !</h3>
};

const GuestGreeting = () => {
  return <h3>Please sign in</h3>
};

const Greeting = (props) => {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
};

const LoginButton = (props) => {
  return <button onClick={props.onClick}> Login </button>
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>
};

class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true})
  };

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  };

  render() {
    const { isLoggedIn } = this.state;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <h1>This is Condition component</h1>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        {isLoggedIn && <h4>isLoggedIn: true</h4>}
        {!isLoggedIn && <h4>isLoggedIn: false</h4>}
      </div>
    )
  }
}

export default Condition;