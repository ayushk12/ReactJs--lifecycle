import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0
  };

  constructor(props) {
    super(props);
    console.log("Mounting Phase--Constructor");
    debugger;
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    console.log("Render()");
    return (
      <div>
        <button onClick={() => this.setState({ counter: this.state.counter })}>
          Update
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
