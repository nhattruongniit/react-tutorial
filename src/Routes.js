import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Clock from "./Clock";
import HandingEvent from "./HandlingEvent";
import Condition from "./Condition";
import ListKeys from "./ListKeys";
import Select from "./Select";
import LiftingState from "./LiftingState";
import Composition from "./Composition";
import Refs from "./Refs";
// import SimpleForm from "./ReduxForm";
import Curry from "./Curry";
import { HocWithMouse } from "./MousePosition";
import { MousePositionHook } from "./MousePositionHook";
import HookTest from "./hooks/hooks";
import HooksCallBack from "./hooks/useCallback";
import RenderProps from "./RenderProps";
import UseMemo from "./useMemo";
import Memo from "./memo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/clock" component={Clock} />
    <Route exact path="/handling-event" component={HandingEvent} />
    <Route exact path="/condition" component={Condition} />
    <Route exact path="/list-keys" component={ListKeys} />
    <Route exact path="/select" component={Select} />
    <Route exact path="/lifting-state" component={LiftingState} />
    <Route exact path="/composition" component={Composition} />
    <Route exact path="/refs" component={Refs} />
    {/*<Route path="/redux-form" component={SimpleForm} />*/}
    <Route exact path="/mouse-position" component={HocWithMouse} />
    <Route exact path="/mouse-hook" component={MousePositionHook} />
    <Route exact path="/curry" component={Curry} />
    <Route exact path="/hooks-test" component={HookTest} />
    <Route exact path="/hooks-callback" component={HooksCallBack} />
    <Route exact path="/render-props" component={RenderProps} />
    <Route exact path="/use-memo" component={UseMemo} />
    <Route exact path="/memo" component={Memo} />
  </Switch>
);

export default Routes;
