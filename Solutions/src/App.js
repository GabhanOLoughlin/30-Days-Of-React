import './App.css';

import React, { Component } from 'react';

const Country = ({country: {name, capital, flags, languages, population, currency },}) => {
  
  const lengthOfLanguages = languages ? Object.keys(languages).length : -1;
  const languageOrLanguages = lengthOfLanguages > 1 ? 'Languages' : 'Language';
  const formatLanguages = languages ? Object.values(languages).join(', ') : "";

  const capitals = capital ? <><span>Capital: </span>{Object.values(capital).join(', ')}</> : '';

  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flags.png} alt={name.common} />
      </div>
      <h3 className='country_name'>{name.common.toUpperCase()}</h3>
      <div class='country_text'>
        <p>{capitals}</p>
        <p>
          <span>{languageOrLanguages}: </span>
          {formatLanguages}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }

  fetchCountryData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Fetching Data Using Axios</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
          {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
