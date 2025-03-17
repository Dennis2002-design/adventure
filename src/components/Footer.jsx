import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter to receive our best Vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can Unsubscribe any Time
                </p>
                <div className="input-areas">
                    <form >
                        <input
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms and Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contuct US</h2>
                        <Link to='/sign-up'>Contacts</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>X-space</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-log">
                        <Link to= '/' className='social-logo'>KING</Link>
                    </div>
                    <small className="website-rights">KING @ 2025</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </Link>
                        <Link 
                        className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </Link>
                        <Link 
                        className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </Link>
                        <Link 
                        className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='Youtube'>
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </Link>
                        <Link 
                        className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
