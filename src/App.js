import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      names : []
    }
  }
  handleClick(event){
    const names = this.state.names.concat("apua")
    this.setState({
      names
    })
    console.log("apua")
  }
  render() {
    return (
      <div className="App">
        teksti
      </div>
    );
  }
}

export default App;