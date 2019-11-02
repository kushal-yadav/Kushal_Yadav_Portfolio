import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import TrainingCourses from './components/TrainingCourses.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
      <TrainingCourses />
      <Contact />
    </div>
  );
}

export default App;
