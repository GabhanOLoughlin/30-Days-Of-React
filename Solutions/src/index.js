import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

import gabhanImage from './images/Gabhan.jpg';

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

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// class based component
class Header extends React.Component {
  render() {    
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,            
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>          
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Count = ({ count, addOne, subtractOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={subtractOne} style={buttonStyles} />
    </div>
  </div>
)

class Main extends React.Component {
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      count,
      addOne,
      subtractOne,
    } = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Count count={count} addOne={addOne} subtractOne={subtractOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)

const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

class App extends React.Component {
  state = {
    count: 0,
    loggedIn: false,
  }

  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  subtractOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  showDate = (time) => {
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

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  render() {

    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Gabhan',
        lastName: 'OLoughlin',
      },
      date: 'June 15th 2023',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const user = { ...data.author, image: gabhanImage }

    const status = this.state.loggedIn ? <Welcome /> : <Login />
    const { loggedIn } = this.state

   return (
    <div className='App'>
      <Header data={data} />
      {status}
      <Button text={this.state.loggedIn ? 'Logout' : 'Login'} style={buttonStyles} onClick={this.handleLogin} />
      {loggedIn && (<Main
        user={user}
        techs={techs}
        handleTime={this.handleTime}
        greetPeople={this.greetPeople}
        addOne={this.addOne}
        subtractOne={this.subtractOne}
        count={this.state.count}
      />)}
      <Footer date={new Date()} />
    </div>
   )
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);