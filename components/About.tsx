import React from 'react'

function About() {
  return (
    <div id='about'>
        <section className='about'>
      <div className="heading">
        <h3>About <span>Me</span></h3>
      </div>
<div className="img-container">
    <img src="/profile.png" alt="Profile-picture" height={80} width={80} />
</div>
    <div className="content">
        <h3>Frontened Developer!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum, nesciunt tempora accusamus officia eius ipsum velit quia provident veritatis dignissimos, excepturi maiores non maxime dolor exercitationem odio commodi illum necessitatibus ipsa. Dolore enim ducimus eos esse perspiciatis quis magnam accusantium praesentium, quasi recusandae at maiores aliquam, iusto minus dolorem!</p>
   <div className="lrn-btn">
    <a href="#">Read More</a>
   </div>
    </div>

      </section>
    </div>
  )
}

export default About
