import { useState } from 'react';
import './App.css';
import Nav from './components/navBar/nav.jsx'; 
import Main from './components/ main/Main.jsx';
import Services from './components/services/Services.jsx';
import Projects from './components/projects/project.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Main/> 
      <Services/>
      <Projects></Projects>
      <Contact/>
      
      
    </div>
  );
}

export default App;
