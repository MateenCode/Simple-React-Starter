import React, { Component } from "react";

import FunctionalComponent from "./components/FunctionalComponent";
import Calculator from "./components/Calculator";
import Subtraction from "./components/Subtraction";
import Multiply from "./components/Multiply";
import Divide from "./components/Divide";

import "./css/App.css";

class App extends Component {
  render() {

  


    return (
      <div className="App">
        <FunctionalComponent />
        <Calculator />
        <Subtraction />
        <Multiply />
        <Divide />
      </div>
      
    );
  }
}

export default App;
