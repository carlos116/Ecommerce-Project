import React from 'react'

function Contact() {
  return (
    <div className='contact-section d-flex justify-content-center align-items-center'>
      <div className="contact-container d-flex flex-column flex-md-row ">

          <form className='contact-form  px-5 py-4 d-flex flex-column' >
                <h4 className='mb-4'>We'd love to hear from you ✉</h4>
                <input className='mb-1 py-1 px-2' name='fullName' type="text" placeholder='Full name' required/>
                <input className='my-1 py-1 px-2' name='email' type="text" placeholder='Email address' required/>
                <textarea className='mt-1 py-1 px-2' name="message" id="" rows="5" placeholder='Message'></textarea>
                <button className='general-btn send-btn text-white border-0 mx-auto p-2 my-4' type='submit'>Send message</button>
        </form>

        <div className="contact-info px-5 py-4">
          <h3 className='mb-4'>Contact us</h3>
          <h5>Email</h5>
          <p>support@tef.com</p>
          <hr />
          <h5>Phone</h5>
          <p>444 843 7616</p>
          <hr />
          <h5>Social Networks</h5>
          <div className='social-links contact'>
              <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook contact-icon pr-2" /></a>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter contact-icon px-2" /></a>
              <a href="https://youtube.com/"><i className="fa-brands fa-youtube contact-icon px-2" /></a>
              <a href="https://instagram.com/"><i className="fa-brands fa-instagram contact-icon px-2" /></a> 
          </div>
          <hr />
        </div>

      </div>
    </div>
  )
}

export default Contact