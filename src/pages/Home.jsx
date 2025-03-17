import '../App.css'
import Card from '../components/Cards'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="card"><Card /></div>
      <Footer />
    </div>
  )
}

export default Home
