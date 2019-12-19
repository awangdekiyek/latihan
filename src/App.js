import React from "react";
import Counter from "./component/counter/counter";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/Home">
          <Counter />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <h1>Err: 404</h1>
        </Route>
      </Switch>
    </div>
  );
}

// function Paijo() {
//   return (
//     <div>
//       <h1>ini</h1>
//       <h1>paijo</h1>
//     </div>
//   );
// }

export default App;
