import './App.css';

import Header from './components/header/Header';

const App = () => { 

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
    </div>
  )
}

export default App;
