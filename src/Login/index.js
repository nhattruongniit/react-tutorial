import React from 'react';

class Login extends React.Component {

  handleSubmit = (e) => {
    const { history } = this.props;
    e.preventDefault();
    history.push('/dashboard');
  }

  render() {
    const { handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        Username: <input name="username" type="text" value="admin" />
        <br />
        Password: <input type="text" value="admin" />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
};

export default Login;
