import React from 'react';

import headerStyles from '../../styles/header.module.scss';

const {header, headerWrapper} = headerStyles;

const Header = () => {
  return (
    <header className={header}>
    <div className={headerWrapper}>
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Gabhan</p>
      <small>Oct 15, 2020</small>
    </div>
  </header>
  )
}

export default Header