import React, { Component } from 'react'

require('../../scss/style.scss')

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Hello World!</h2>
        { this.props.children }
      </div>
    )
  }
}

export default App
