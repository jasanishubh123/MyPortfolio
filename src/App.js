import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Service from './components/Services';
import Testinomials from './components/Testinomials';
import Contact from './components/Contact';

import './App.css';


function App() {

  return (
    <>
     
     <Header/>

      <Home/>

      <main id="main">

        <About/>

        {/* <Facts/> */}

        <Skills/>

        <Resume/>

        <Portfolio/>

        {/* <Service/> */}
       

       {/* <Testinomials/> */}
        
        <Contact/>

      </main>


      <Footer/>
      
    </>
  );
}

export default App;
