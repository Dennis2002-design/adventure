import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import './Dropdown.css'

const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

  return (
    <>
      <ul onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item) => {
            return(
                <li key={item.title}>
                    <Link className={item.cName} to ={item.path} onClick={() => {
                        setClick(false)
                        console.log('clicked');
                        
                    }}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default Dropdown
