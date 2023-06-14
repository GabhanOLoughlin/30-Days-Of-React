import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

const Numbers = ({numbers}) => {
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}
const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>        
        <ul>
        <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);