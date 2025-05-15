import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h3>ContentCraft</h3>
        </div>
        <ul className="nav-menu">
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#templates">Templates</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;