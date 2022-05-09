import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3cflmhs', 'template_8f3etn7', form.current, 'xAw5_nDNuSgUUeZrP')

        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact __options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__o' />
                        <h5>Email</h5>
                        <h4>tnoui@outlook.com</h4>
                        <a href="mailto:tnoui@outlook.com">Send a message</a>
                    </article>

                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact