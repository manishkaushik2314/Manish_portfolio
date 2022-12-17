import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
 
const Experience = () => {
  return (
   <section id="Experience">
    <h5>The skills i have</h5>
   <h2>My Experience</h2>
   <div className="container experience_container">
    <div className="experience_frontend">
      <h2>Front-end Devlopement</h2>
      <div className="experience_content">
        <article>
          <BsPatchCheckFill/>
          <h3>HTML</h3>
          <h5>Experienced</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>CSS</h3>
          <h5>Intermediate</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>JavaScript</h3>
          <h5>Intermediate</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>React.Js</h3>
          <h5>Intermediate</h5>
        </article>
      </div>

      {/* Backend devlopement */}

    <div className="backend">
      <div className="experience_backend">
      <h2>Back-end Devlopement</h2>
      <div className="experience_content">
      <article>
          <BsPatchCheckFill/>
          <h3>C++ & Java</h3>
          <h5>Intermediate</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>Python</h3>
          <h5>Intermediate</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>MySQL</h3>
          <h5>Intermediate</h5>
        </article>
        <article>
          <BsPatchCheckFill/>
          <h3>MongoDB</h3>
          <h5>Intermediate</h5>
        </article>
        
        
        
        </div>
      </div>
    </div>
   </div>
   </div>
   </section>
  )
}

export default Experience
