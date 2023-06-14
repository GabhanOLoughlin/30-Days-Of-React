import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>{this.props.data.author.firstName} {this.props.data.author.lastName}</h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2023</p>
        </div>
      </footer>
    )
  }
}

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Gabhan',
      lastName: 'OLoughlin',
    },
    date: '14th June 2023',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);