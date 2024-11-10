import React from 'react'

function Skills() {
  return (
    <div id='skills'>
        <section className="skills">
        <div className="heading">
        <h3>My <span>Skills</span></h3>
      </div>
    
     <div className="card">

        <p>HTML</p>
        <div className="loader-bar">
            <div className="progress" style={{width: '90%'}}>80%</div>
        </div>
    
        <p>Css</p>
        <div className="loader-bar">
            <div className="progress" style={{width: '70%'}}>70%</div>
        </div>

        <p>TypeScript</p>
        <div className="loader-bar">
            <div className="progress" style={{width: '60%'}}>60%</div>
        </div>
    
        <p>NexJs</p>
        <div className="loader-bar">
            <div className="progress" style={{width: '60%'}}>60%</div>
        </div>

        </div>
        </section>

    </div>
  )
}

export default Skills
