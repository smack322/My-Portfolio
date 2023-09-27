import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
