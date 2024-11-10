import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <section className="about">
         <div className="heading">
        <h3>Contact <span>Me!</span></h3>
      </div>
<form action="">
    <label htmlFor="Name"></label>
    <input type="text" placeholder='Full Name' />
    <label htmlFor="email"></label>
    <input type="email" placeholder='Email Address' />
</form>

<form action="">
    <label htmlFor="Name"></label>
    <input type="number" placeholder='Mobile Number' />
    <label htmlFor="email"></label>
    <input type="text" placeholder='Email Subject' />
</form>
    
<form action="">
    <label htmlFor="message"></label>
    <textarea placeholder='Your Message' rows={8} className='message'/>
    
</form>
<a href="#" className='submit'>Submit</a>



      </section>
    </div>
  )
}

export default Contact
