import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import "./App.css";


function App(){
    // function for scroll trigger
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      
    return(
    
    <div>
     <div className='navbar'>
      <p className='logo'>Quizzy.</p>
      <div className="logo link" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <p className="smallicon" onClick={() => scrollToSection('section1')}>
        Home
      </p>
      <p className="smallicon" onClick={() => scrollToSection('section2')}>
        Feature
      </p>
      <p className="smallicon" onClick={() => scrollToSection('section3')}>
        Contact Us
      </p>
    </div>
    </div>
    
    

    <div id="section1" className="section" style={{ paddingTop:'37px', height: '100vh', border: '1px solid #fff' }}>
      <Hero/>
    </div>

    <div id="section2" className="section" style={{ height: '100vh', border: '1px solid #fff' }}>
      <Features/>
    </div>

    <div id="section3" className="section" >
      <Footer/>
    </div>
  </div>
  );









}
export default App;