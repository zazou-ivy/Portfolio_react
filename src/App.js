import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Quote from './components/quote/Quote';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';




const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Quote/>
      <Work />
      <Contact />
    </main>
    <ScrollUp />
    </>
  )
}

export default App