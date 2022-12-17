import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
 
const Footer = () => {
  return (
    <footer id='Footer'>
      <a href="#" className='footer_logo'>Manish Kaushik</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>

      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com"><FiInstagram/></a>
        <a href="https://www.twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Manish Kaushik. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
