import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';

const Numbers = ({numbers}) => {
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)


// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
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
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);