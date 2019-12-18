import React from "react";
import Counter from "./component/counter/counter";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <h1>home</h1>
        </Route>
        <Route path="/a">
          <h1>a</h1>
          <Counter />
        </Route>
        <Route path="/b">
          <h1>b</h1>
        </Route>
        <Route path="/">
          <h1>Err: 404</h1>
        </Route>
      </Switch>
      {/* <h1>Hellooooo</h1>
      <h1>Hellooooo</h1> */}
      {/* <Paijo /> */}
      {/* <Counter />
      <Counter /> */}
    </div>
  );
}

function Paijo() {
  return (
    <div>
      <h1>ini</h1>
      <h1>paijo</h1>
    </div>
  );
}

export default App;
