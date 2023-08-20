import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='overlay'></div>
      <div className='container'>
        <h1><u>CONTACT</u></h1>
        <div className='contact-info'>
          <div className='info'>
            <h2>Email</h2>
            <p>ijasnazeer786@gmail.com</p>
          </div>
          <div className='info'>
            <h2>Phone</h2>
            <p>91-8156962855</p>
          </div>
          <div className='info'>
            <h2>Address</h2>
            <p>Kochupadeettathil-house,<br></br>Karthikappally P.O,<br></br> Alappuzha,<br></br>Kerala, India</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
