import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "message here"
    }
  }
  handleChange = e => {
    this.setState({
      display: e.target.value
    })
  }
  render() {
    return (
      <div style={{display: "flex", justifyContent: "space-around", marginTop: 250}}>
        <input type="text" onChange={this.handleChange}/>
        {this.state.display}
      </div>
    );
  }
}

export default App;
