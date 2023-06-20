import './App.css';

import { useState } from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() { 
  const [message, setMessage ] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');

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
  return `${month} ${date}, ${year}`
}

  const handleLogin = () => {
    setLoggedIn(!loggedIn); 
  };

  const handleTime = () => {    
    setMessage(showDate(new Date()))
  }

  const greetPeople = () => {
    setMessage('Welcome to 30 Days Of React Challenge, 2020');    
  }

  const handleMouseMove = (e) => {
    setMessage('Mouse is moving');
  }

  const handleChange = (e) => {
    setFirstName(e.target.value);
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    setMessage(`${e.key} has been pressed`);
  }

  const handleBlur = (e) => {
    setMessage('Input field has been blurred');
  }

  const handleCopy = (e) => {
    setMessage('Using 30 Days Of React for commercial purpose is not allowed');
}

  const techs= ['HTML', 'CSS', 'JS']

  const data = {
    welcome: '30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Gabhan',
      lastName: 'OLoughlin',
    },
    date: 'Oct 9, 2020',
  }

  return (
    <div>      
      <Header data={data} />
      <label htmlFor=''>Handle Key Press: </label>
      <input type='text' onKeyUp={handleKeyPress} />
      <br />
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <br />
      <label htmlFor=''>Handle Change: </label>
      <input
              onChange={handleChange}
              name='firstName'
              value={firstName}
            />
      <br />
      <label htmlFor=''>Handle Blur (Focus leaves field): </label>
      <input type='text' onBlur={handleBlur} />
      <br />
      <label htmlFor=''>Handle Copy: </label>
      <input type='text' onCopy={handleCopy} />
      <Main techs={techs}
          handleTime={handleTime}
          greetPeople={greetPeople}          
          handleLogin={handleLogin}
          message={message}
          loggedIn={loggedIn} />
      <Footer date={new Date()} />
    </div>
  )
}

export default App;
