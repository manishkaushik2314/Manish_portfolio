import React from 'react'
import './index.css'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
//  import Services from './components/Services/Services'
// import Portfolio from './components/Portfolio/Portfolio'
// import Testimonials from './components/Testimonials/Testimonials'
// import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
  <>
  <Header/>
  <About/>
  <Navbar/>
  <Experience/>
  <Footer/>
   {/* <Services/> */}
  { /* <Portfolio/>
  <Contact/>
  <Testimonials/> */}
  </>
  )
}

export default App
