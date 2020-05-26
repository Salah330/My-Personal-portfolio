import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
