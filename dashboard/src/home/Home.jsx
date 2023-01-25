import React from 'react'
import Navbar from './navbar/Navbar'
import Header from './header/Header';
import TeamMood from './teamMood/TeamMood';
import "./Home.css"
import HeroContent from './herocontent/HeroContent';
import Footer from './footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className = "body-container">
          <div className='main-container'>
            <div >
            <Header />
            <HeroContent />
          </div>
          <TeamMood />
          </div>
          <div className='footer-container'>
            <Footer />
          </div>
        </div>
        
    </div>
  )
}

export default Home