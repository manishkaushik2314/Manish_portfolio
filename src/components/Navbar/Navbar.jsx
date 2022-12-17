import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Navbar = () => {
  const[activeNav,SetActiveNav]=useState('#')
  return (
    <nav>
      <a onClick={()=> SetActiveNav("#")} className={activeNav==='#' ? 'active':""} href="#"><AiOutlineHome/></a>
      <a  href="#About" onClick={()=> SetActiveNav("#About")} className={activeNav==='#About' ? 'active':""} ><AiOutlineUser/></a>
      <a href="#Services" onClick={()=> SetActiveNav("#Services")} className={activeNav==='#Services' ? 'active':""}><RiServiceLine/></a>
      <a href="#Experience"onClick={()=> SetActiveNav("#Experience")} className={activeNav==='#Experience' ? 'active':""}><BiBook/></a>
      <a href="#Footer"onClick={()=> SetActiveNav("#Footer")} className={activeNav==='#Footer' ? 'active':""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar
