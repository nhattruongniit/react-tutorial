import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const About = lazy(() =>  import('./About'));
const Select = lazy(() => import('./Select'));

class Lazyload extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          this is Lazyload componet
        </h1>
        <Router>
          <Suspense fallback={<div>...Loading</div>}>
            <Link to="/about">About</Link>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/select" component={Select} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    )
  }
}

export default Lazyload;
