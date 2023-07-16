import React, { useRef } from 'react';
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_77912ba', 'template_qrju61s', form.current, '5PYW3TVfPMuwQfb-a')

    e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>sushgabhane123@gmail.com</h5>
            <a href="mailto:sushgabhane123@gmail.com" target="_blank">Send a message...</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+1234667890</h5>
            <a href="https://api.whatsapp.com/send?phone=+919673866894" target="_blank">Send a message...</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Type a message..." required></textarea>
          <button type="submit" className="btn btn-primary">Send a message...</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;
