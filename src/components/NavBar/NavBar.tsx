import React from 'react';
import './NavBar.css';

type Props = {
  children: JSX.Element
}

const NavBar = ({children}: Props) => {

  return (
    <div className="nav-bar">
      <h3>
        Where in the world?
      </h3>
      {children}
    </div>
  )
}

export default NavBar;
