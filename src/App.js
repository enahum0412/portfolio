import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
// import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Intro />
      {/* <About /> */}
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;