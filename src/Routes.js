import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Clock from './Clock';
import HandingEvent from './HandlingEvent';
import Condition from './Condition';
import ListKeys from './ListKeys';
import Select from './Select';
import LiftingState from './LiftingState';
import Composition from './Composition';
import Refs from './Refs';
import SimpleForm from './ReduxForm';
import { Hooks } from './Hooks';

const Routes = () => (
  <Switch>
    <Route path="/clock" component={Clock} />
    <Route path="/handling-event" component={HandingEvent} />
    <Route path="/condition" component={Condition} />
    <Route path="/list-keys" component={ListKeys} />
    <Route path="/select" component={Select} />
    <Route path="/lifting-state" component={LiftingState} />
    <Route path="/composition" component={Composition} />
    <Route path="/refs" component={Refs} />
    <Route path="/hooks" component={Hooks} />
    <Route path="/redux-form" component={SimpleForm} />
  </Switch>
);

export default Routes;

