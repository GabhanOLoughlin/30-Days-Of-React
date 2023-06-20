import './App.css';

import { useState } from 'react';

function App() { 
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  });

  const handleChange = (e) => {    
    const {name, value} = e.target;
    setState({...state,
      [name]: value});
  }

  const handleSubmit = (e) => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault()

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log({state})
  }

  return (
    <div className='App'>      
      <h3>Add Student</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={state.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={state.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={state.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={state.title}
              onChange={handleChange}
            />
          </div>

          <button class='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}

export default App;
