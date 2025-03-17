import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../components/Dropdown'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] =useState(false);

  const onMouseEnter = () => {
    window.innerWidth >= 960 ? setDropdown(true) : setDropdown(false);
  }
  const onMouseLeave = () => {
    window.innerWidth >= 960 ? setDropdown(false) : setDropdown(false)
  }

  const handleClick = () => {
    setClick(!click);
    console.log("they clicked ,me");
    
  }
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // window.addEventListener('resize', showButton) ;
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton) ;
    return () => {
      window.removeEventListener("resize", showButton);
    }
  },[])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <video src="/video/Your paragraph text (4).mp4" autoPlay loop muted className='logo-video'/></Link>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? 'times' : 'bars-staggered'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item link-home">
              <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                Home
              </Link>
            </li>
            <li className="nav-item link-service"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                Services <FontAwesomeIcon icon = 'sort-down' className='dropdown-icon'/>
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item link-product">
              <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle = 'btn--outline'> SIGN UP</Button> }
        </div>
      </nav>
    </>
  )
}

export default Navbar
