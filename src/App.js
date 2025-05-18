import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TemplateLibrary from './components/TemplateLibrary';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>ContentCraft</h1>
        <p>Your content creation companion</p>
      </header>
      <main>
        <div className="hero-section">
          <h2>Create Amazing Content</h2>
          <p>Templates, tools, and organization for all your content needs.</p>
        </div>
        <TemplateLibrary />
      </main>
    </div>
  );
}

export default App;