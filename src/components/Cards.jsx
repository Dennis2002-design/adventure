import React from 'react'
import CardItem from './CardItem'
import './Card.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                      src = {`${process.env.PUBLIC_URL}}/images/pexels-julieaagaard-1374064.jpg`}
                      text = 'Looks cool?, it is than you ever Think! hot wind coming from the mountaing degrading the law of science'
                      label = 'Adventure'
                      path = '/services'
                    />
                    <CardItem 
                      src = {`${process.env.PUBLIC_URL}/images/istockphoto-2042539861-1024x1024 (1).jpg`}
                      text = 'Travel anywhere you would like with a minimum fee'
                      label = 'Luxury'
                      path = '/services'
                    />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem 
                      src = {`${process.env.PUBLIC_URL}/images/pic1.jpg`}
                      text = 'Explore the world view 3- steps mountain cool breeze'
                      label = 'Epics'
                      path = '/services'
                    />
                    <CardItem 
                      src = {`${process.env.PUBLIC_URL}/images/pic-1.jpg`}
                      text = 'Travel anywhere you would like with a minimum fee'
                      label = 'Luxury'
                      path = '/services'
                    />
                    <CardItem 
                      src = {`${process.env.PUBLIC_URL}/images/pic-2 (2).jpg`}
                      text = 'Travel anywhere you would like with a minimum fee'
                      label = 'Adventure'
                      path = '/services'
                    />
                    </ul>
                    
                
            </div>
        </div>
        
      
    </div>
  )
}

export default Cards
