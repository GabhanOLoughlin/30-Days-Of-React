import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

const App = () => { 
  return (
  <h1>Welcome to 30 Days Of React</h1>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);