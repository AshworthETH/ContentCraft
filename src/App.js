import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import TemplateLibrary from './components/TemplateLibrary';
import ProjectDashboard from './components/ProjectDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<ProjectDashboard />} />
          <Route path="/templates" element={<TemplateLibrary />} />
          <Route path="/projects" element={<ProjectDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <main>
    <header className="App-header">
      <h1>ContentCraft</h1>
      <p>Your content creation companion</p>
    </header>
    <div className="hero-section">
      <h2>Create Amazing Content</h2>
      <p>Templates, tools, and organization for all your content needs.</p>
    </div>
  </main>
);

export default App;