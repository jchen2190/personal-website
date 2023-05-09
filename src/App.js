import React from 'react';
import './bootstrap/bootstrap.min.css';
import './App.css';
import Navigation from './components/nav';
import Introduction from './components/introduction'
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;