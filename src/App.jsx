import Navbar from './components/Navbar'
import "./library/fontLibrary.jsx"
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products .jsx'
import SignUp from './pages/SignUp.jsx'
import Consulting from './pages/Consulting.jsx'
import Development from './pages/Development.jsx'
import Design from './pages/Design.jsx'
import Marketing from './pages/Marketing.jsx'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/services' element = {<Services />} />
          <Route path='/products' element = {<Products />} />
          <Route path='/sign-up' element = {<SignUp />} />
          <Route path='/consulting' element = {<Consulting />} />
          <Route path='/development' element = {<Development />} />
          <Route path='/design' element = {<Design />} />
          <Route path='/marketing' element = {<Marketing />} />
        </Routes>
    </>
  )
}

export default App
