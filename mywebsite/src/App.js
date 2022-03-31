import React from 'react';
import { About } from './About.js';
import Footer from './Footer';
import { MainBanner } from './MainBanner';
import NavBar from './NavBar.js';
import './style.css';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <MainBanner />
      <About/>
      <Footer/>
    </div>
  )
}


export default App