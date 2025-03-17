import React from 'react'
import Button from './Button'
import '../App.css'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        {/* <video src="../public/video/video5.mov" autoPlay loop muted className='hero-video'/> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns btn-mobile">
        <Button 
            className ='btn'
            buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button 
            className ='btn'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                WATCH TRAILER <FontAwesomeIcon icon = 'play-circle' className='icon' />
            </Button>

      </div>
    </div>
  )
}

export default HeroSection
