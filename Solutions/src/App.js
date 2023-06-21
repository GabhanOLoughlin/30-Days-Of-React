import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'Gabhan',
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return {firstName: props.firstName}
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    setTimeout(() => {
      this.setState({
        firstName: 'Gabhan',
      })
    }, 3000)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h3>getDerivedStateFromProps</h3>
        {this.state.firstName}
      </div>
    )
  }
}

export default App;
