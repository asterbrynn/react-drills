import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state={
      arr: ["spaghoot", "pizza", "croissants", "sausage", "milk"]
    }
  }

  updateFilter = e => {
    console.log(e)
    this.setState({
      userInput: e
    })
  }

  render() {
    let list = this.state.arr.map((val, i) => <h3 key={i}>{val}</h3>)
    return (
      <div className="App">
        <input onChange={e => this.updateFilter(e.target.value)}/>
        {list}
      </div>
    );
  }
}

export default App;
