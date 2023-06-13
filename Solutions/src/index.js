import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

import Gabhan from './images/Gabhan.jpg';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

const UserCard = (props) => {
  const yearBorn = 1972
  const currentYear = 2023
  const age = currentYear - yearBorn  
  let status = age >= 18

  console.log(props);

  return (
    <div className='user-card'>
      <img src={Gabhan} alt='' />
      <h2>{props.firstName}</h2>
      <Age age={age} />
      <Status status={status} />
    </div>
  )
}

const TechList = (props) => {
  const techsFormatted = props.skills.map((tech) => <li key={tech}>{tech}</li>)
  return <ul>{techsFormatted}</ul>
}
// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <TechList skills={['HTML', 'CSS', 'C#', 'React']} />
      <UserCard firstName='Gabhan' />    
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

const Age = (props) => {
  return (
  <div>The person is {props.age} years old.</div>
  )
}

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// JSX element, app, a container or a parent
const App = () => {
  const welcome='Welcome to 30 Days Of React' 
  const title='Getting Started'
  const subtitle='Every Day is a Learning Day!'
  const date='13th June 2023'   

return (
  <div className='app'>   
    <Header 
      welcome={welcome}
      title={title}
      subtitle={subtitle}
      date={date}         
      />    
    <Main />
    <Footer />
  </div>
)
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);