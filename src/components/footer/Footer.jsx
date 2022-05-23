import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#me" className='footer__logo'>tofuBear</a>

      <ul className="permalinks">
        <li><a href="#me">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/"><FiFacebook/></a>
        <a href="https://instagram.com/"><FiInstagram/></a>
        <a href="https://twitter.com/"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; tofuBear. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer