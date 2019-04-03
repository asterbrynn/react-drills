import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state={
      arr: ["spaghoot", "pizza", "croissants", "sausage", "milk"],
      userInput: ""
    }
  }

  updateFilter = input => {
    this.setState({
      userInput: input
    })
  }
  
  render() {
    let filteredList = this.state.arr.filter((val, i) => {
      return val.includes(this.state.userInput)
    }).map((val, i) => <h3 key={i}>{val}</h3>)
    console.log(filteredList)
    return (
      <div className="App">
        <input onChange={e => this.updateFilter(e.target.value)}/>
        {filteredList.length > 0 ? filteredList : this.state.arr}
      </div>
    );
  }
}

export default App;
