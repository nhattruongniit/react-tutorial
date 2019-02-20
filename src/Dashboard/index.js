import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const user = window.sessionStorage.getItem('user');
    if (!user) {
      alert('Bạn ko có session. Se bi out ra login!');
      window.sessionStorage.clear();
      history.push('/login');
    } 
  }
  render() {
    return (
      <div>this is dashboard component</div>
    )
  }
};

export default Dashboard;
