import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

import Gabhan from './images/Gabhan.jpg';

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = (props) => {
  console.log(props);
  const data = props.data;
  const {
    title,
    subtitle,    
  } = data
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{data.welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <small>{showDate(props.data.date)}</small>
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

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// JSX element, main
const Main = (props) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <TechList skills={['HTML', 'CSS', 'C#', 'React']} />
      <UserCard firstName={props.firstName} />    
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
  const data = {
   welcome:'Welcome to 30 Days Of React',
   title:'Getting Started',
   subtitle:'Every Day is a Learning Day!',
   author: {
      firstName: 'Gabhan',
      lastName: 'OLoughlin',
    },
   date: new Date(),
  }

  const sayHi = () => {
    alert('Hi!')
  }
return (
  <div className='app'>   
    <Header data={data} />    
    <Main firstName={data.author.firstName} />
    <Button text='Say Hi!!' onClick={sayHi} />
    <Footer />
  </div>
)
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);