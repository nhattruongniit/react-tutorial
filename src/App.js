import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './redux/reducer';
import Routes from './Routes';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="wrapper">
            <div className="sidebar">
              <ul>
                <li>
                  <NavLink to="/clock" activeClassName="active" >Clock</NavLink>
                </li>
                <li>
                  <NavLink to="/handling-event" activeClassName="active" >Handing Event</NavLink>
                </li>
                <li>
                  <NavLink to="/condition" activeClassName="active" >Condition</NavLink>
                </li>
                <li>
                  <NavLink to="/list-keys" activeClassName="active" >List Keys</NavLink>
                </li>
                <li>
                  <NavLink to="/lifting-state" activeClassName="active" >Lifting State</NavLink>
                </li>
                <li>
                  <NavLink to="/composition" activeClassName="active" >Composition</NavLink>
                </li>
                <li>
                  <NavLink to="/refs" activeClassName="active" >Refs</NavLink>
                </li>
                <li>
                  <NavLink to="/hooks" activeClassName="active" >Hooks</NavLink>
                </li>
                <li>
                  <NavLink to="/redux-form" activeClassName="active" >Redux Form</NavLink>
                </li>
              </ul>
            </div>
            <div className="content">
              <Provider store={store}>
                <Routes />
              </Provider>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
