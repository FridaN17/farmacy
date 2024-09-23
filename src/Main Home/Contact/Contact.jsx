import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='CONTACT'>
        <body className='contact-body'>
    <main class="contact-box">
        <span class="border-line"></span>
        <form>
            <h2>Contact Us</h2>
            <div class="input-box">
                <input type="text" required="required" />
                <span>Full Name</span>
                <i></i>
            </div>
            
            
            <div class="input-box">
                <input type="email" required="required"/>
                <span>Email</span>
                <i></i>
            </div>
            
            <div class="input-box">
                <textarea rows={1} required="required"/>
                <span>Message</span>
                <i></i>
            </div>

            <input type="submit" value="Submit"/>
        </form>
    </main>
</body>
        <div className="contactRight">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.81717248136!2d19.7788479!3d41.3261708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031e40fbbba8b%3A0xed601f0ae63bd349!2sFarmaci%20Mona!5e0!3m2!1sen!2s!4v1682786142665!5m2!1sen!2s" width="500" height="450"  loading="lazy"></iframe>
        </div>
    </section>
  )
}

export default Contact