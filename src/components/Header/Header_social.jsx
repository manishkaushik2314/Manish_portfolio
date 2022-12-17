import React from 'react'
import { BsLinkedin,BsGithub } from "react-icons/bs";

const Header_social = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.in" target="_blank"><BsLinkedin/></a>
        <a href="https://github.in" target="_blank"><BsGithub/></a>
      
    </div>
  )
}

export default Header_social
