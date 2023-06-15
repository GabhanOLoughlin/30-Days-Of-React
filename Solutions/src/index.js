import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

class App extends React.Component {
  state = {
    count: 0,
  }
  addOne =() => {
    this.setState({ count: this.state.count +1})
  }
  subtractOne =() => {
    this.setState({ count: this.state.count -1})
  }
  render() {
   const count = this.state.count;   
   return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={this.addOne}> Add One</button>
      <button onClick={this.subtractOne}> Subtract One</button>
    </div>
   )
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);