import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Clock from './Clock';
import HandingEvent from './HandlingEvent';
import Condition from './Condition';
import ListKeys from './ListKeys';
import Select from './Select';
import LiftingState from './LiftingState';
import Composition from './Composition';
import Refs from './Refs';
import SimpleForm from './ReduxForm';
import Curry from './Curry';
import { HocWithMouse } from './MousePosition';
import { MousePositionHook } from './MousePositionHook';


const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/clock" component={Clock} />
    <Route path="/handling-event" component={HandingEvent} />
    <Route path="/condition" component={Condition} />
    <Route path="/list-keys" component={ListKeys} />
    <Route path="/select" component={Select} />
    <Route path="/lifting-state" component={LiftingState} />
    <Route path="/composition" component={Composition} />
    <Route path="/refs" component={Refs} />
    <Route path="/redux-form" component={SimpleForm} />
    <Route path="/mouse-position" component={HocWithMouse} />
    <Route path="/mouse-hook" component={MousePositionHook} />
    <Route path="/curry" component={Curry} />
  </Switch>
);

export default Routes;

