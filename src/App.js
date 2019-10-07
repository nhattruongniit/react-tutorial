import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, combineReducers } from "redux";
import { reducer as form } from "redux-form";

// redux persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import appReducer from "./redux/reducer";
import Routes from "./Routes";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  appReducer,
  form
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  compose(persistedReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="wrapper">
            <div className="sidebar">
              <ul>
                <li>
                  <NavLink to="/dashboard" activeClassName="active">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeClassName="active">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/clock" activeClassName="active">
                    Clock
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/handling-event" activeClassName="active">
                    Handing Event
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/condition" activeClassName="active">
                    Condition
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/list-keys" activeClassName="active">
                    List Keys
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lifting-state" activeClassName="active">
                    Lifting State
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/composition" activeClassName="active">
                    Composition
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/refs" activeClassName="active">
                    Refs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/redux-form" activeClassName="active">
                    Redux Form
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mouse-position" activeClassName="active">
                    Mouse Position with HOC
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mouse-hook" activeClassName="active">
                    Mouse Position with React Hooks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/curry" activeClassName="active">
                    Curry function
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hooks-test" activeClassName="active">
                    Hooks test
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hooks-callback" activeClassName="active">
                    useCallBack hooks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/use-memo" activeClassName="active">
                    useMemo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/memo" activeClassName="active">
                    React memo
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="content">
              <Provider store={store}>
                <PersistGate
                  loading={<div>Loading ...</div>}
                  persistor={persistor}
                >
                  <Routes />
                </PersistGate>
              </Provider>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
