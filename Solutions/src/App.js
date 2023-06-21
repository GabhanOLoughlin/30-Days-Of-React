import './App.css';

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

const Home = (props) => <h1>Welcome Home</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/home' component={Home} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
