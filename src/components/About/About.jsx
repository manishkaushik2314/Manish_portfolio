import React from 'react'
import './About.css'
import me4 from '../../assets/manish.jpeg'

const About = () => {
  return (
   <section id='About'>
    <div className="about_heading">
    <h5>Get to know</h5>
    <h3>About me</h3>
    </div>
   
    <div className="container about_container">
<div className="about__me">
  <div className="about__me-image">
    <img src={me4} alt="" />

  </div>

</div>
<div className="about__content">
<div className="about__cards">
  <article className="about_card">
    <h5>Experience</h5>
    <small>2+ years</small>
  </article>
  <article className="about_card">
    <h5>Clients</h5>
    <small>worldwide</small>
  </article>
  <article className="about_card">
    <h5>Projects</h5>
    <small>Worked on many Projects</small>
  </article>
</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Placeat modi deserunt quos laboriosam facilis suscipit beatae eveniet, minima a accusamus alias eaque? 
   hic unde molestias officiis velit, fugit quos?</p>
   <a href="#Contact" className='btn btn-primary'>Lets Talk</a>

</div>

    </div>
   </section>
  )
}

export default About
