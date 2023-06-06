import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

import Gabhan from './images/Gabhan.jpg';

const title = <h1>Getting Started React</h1>
const welcome = 'Welcome to 30 Days Of React'
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </div>
  </header>
)

const yearBorn = 1972
const currentYear = 2023
const age = currentYear - yearBorn
const myAge = (
  <p>
    {' '}
    Gabhan is {age} years old.
  </p>
)

const UserCard = () => (
  <div className='user-card'>
    <img src={Gabhan} alt='gabhan' />
    <h2>Gabhan</h2>
  </div>
)

const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript', 'c#', 'SQL']
  const techsFormatted = techs.map((tech) => <li>{tech}</li>)
  return techsFormatted
}
// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      {myAge}
      <UserCard />    
      <div>
      <HexaColor />
      <HexaColor />
      </div>
    </div>
  </main>
)

// JSX element, footer
const Footer = () => (
  <footer>
  <div className='footer-wrapper'>
    <p>Copyright 2020</p>
    </div>
  </footer>
)

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '' 
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}


const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    background: `${bgColor}`
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// JSX element, app, a container or a parent
const App = () => (
  <div className='app'>   
   <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);