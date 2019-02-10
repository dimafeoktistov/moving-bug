import React, { Component } from "react";

import Bug from "./components/Bug";
import "./App.css";

class App extends Component {
  state = {
    x: 0,
    y: 0
  };

  componentDidMount() {
    const coordinates = this.getPosition();
    this.setState({ ...coordinates });
  }

  bug = React.createRef();

  getPosition = () => {
    let el = this.bug.current;

    const { top, left } = el.getBoundingClientRect();

    return {
      x: left,
      y: top
    };
  };

  render() {
    const { x, y } = this.state;
    return (
      <div className="App">
        <header className="App-header">Жук</header>
        <Bug ref={this.bug} x={x} y={y} />
      </div>
    );
  }
}

export default App;
