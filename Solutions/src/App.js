import './index.css';

// index.js
import React from 'react';

import useFetch from './useFetch';

const Country = ({ country: { name, flags, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flags.png} alt={name.common} />
      </div>
      <h3 className='country_name'>{name.common.toUpperCase()}</h3>
      <div class='country_text'>
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

const App = (props) => {  
  const url = 'https://restcountries.com/v3.1/all';
  const data = useFetch(url);

  return (
    <div className='App'>
      <h1>Fetching Data Using Custom Hooks</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
