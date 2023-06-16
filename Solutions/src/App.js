import './App.css';

import { useState } from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() { 
  const [message, setMessage ] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
