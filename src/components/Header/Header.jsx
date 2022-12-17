import React from 'react'
import './Header.css'
import Cta from  './Cta'
import HeaderSocial from './Header_social'
import me3 from '../../assets/manish.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello i am </h3>
        <h2>Manish Kaushik</h2>
        <h5 className="text-light">Full-stack Devloper</h5>
        <Cta/>
        <HeaderSocial/>
        <a href='#Footer' className="scroll_down ">Scroll down</a>
        <div className="me">
        <img src={me3} alt="" />
        </div>
        <a href="#Contact" className='scroll__down'></a>
      </div>
    </header>
)}


export default Header
