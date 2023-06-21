import './App.css';

import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const API_URL = 'https://restcountries.com/v3.1/all'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {        
      const formatLanguages = country.languages ? Object.keys(country.languages).join(', ') : ""   
      const lengthOfLanguages = country.languages ? Object.keys(country.languages).length : -1;
      const languageOrLanguages = lengthOfLanguages > 1 ? 'Languages' : 'Language'
      return (
        <div key={country.name.common}>
          <div>
            {' '}
            <img src={country.flags.png} alt={country.name.common} />{' '}
          </div>
          <div>
            <h1>{country.name.common}</h1>
            <p>Population: {country.population}</p>
            <p>
              {languageOrLanguages} : {formatLanguages}
            </p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Fetching Data Using Axios</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}

export default App;
