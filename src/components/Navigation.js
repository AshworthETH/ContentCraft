import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/">
            <h3>ContentCraft</h3>
          </NavLink>
        </div>
        <ul className="nav-menu">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/templates">Templates</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;