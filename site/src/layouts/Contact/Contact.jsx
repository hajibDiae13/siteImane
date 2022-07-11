import React from 'react';
import Nav from '../../components/Nav/Nav';
import './Contact.css';
function Contact() {
  return (
    <div className='Contact'>
      <Nav title='‎'></Nav>
      <div className='Contact-wrapper'>
        <div className='Contact-title'>
          <span>CONTACT</span>
        </div>
        <div className='Contact-body'>
          <input type='text' name='' id='' placeholder='Full name' />
          <input type='text' name='' id='' placeholder='Email' />
          <textarea placeholder='Message...'></textarea>
          <button className='submitButton'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
