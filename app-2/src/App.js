import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state={
      arr: ["spaghoot", "pizza", "croissants", "sausage", "milk"]
    }
  }
  render() {
    let list = this.state.arr.map((val, i) => <h3 key={i}>{val}</h3>)
    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
