import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
