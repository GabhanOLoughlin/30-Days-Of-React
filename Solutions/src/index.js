import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

/* Moved to index.css
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const mainStyles = {
  backgroundColor: '#F3F0F5',
}

const footerStyles = {
  backgroundColor: '#61DBFB',
}
*/

const title = <h2>Getting Started React</h2>
const header = (
  <header className='headerStyles'>
    {title}
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)

const techs = ['HTML', 'CSS', 'JavaScript', 'c#', 'SQL']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main className='mainStyles'>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {techsFormatted}
    </ul>
  </main>
)

// JSX element, footer
const footer = (
  <footer className='footerStyles'>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

//const rootElement = document.getElementById('root')
//ReactDOM.render(app, rootElement)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(app);