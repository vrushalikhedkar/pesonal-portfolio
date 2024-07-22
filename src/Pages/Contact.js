import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {

  return (
    <section id='contact' className='contact'>
      <div className='container contact-me'>
        <div className='heading-wrapper'>
          <h2>Contact</h2>
        </div>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className="fa-solid fa-location-pin"></i>
              <h3>My Address</h3>
              <p>Nagpur, Maharashtra 440034</p>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className="fa-solid fa-share"></i>
              <h3>Social Profile</h3>
              <div className='social-links'>
                <Link to='https://www.linkedin.com/in/vrushali-khedkar-a0b316251/' target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to='mailto:vrushalikhedkar0704@gmail.com'>
                  <i className="fa-solid fa-envelope-open"></i>
                </Link>
                <Link to='https://wa.me/8080943319' target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
                <Link to='tel:+918080943319'>
                  <i className="fa-solid fa-phone"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className="fa-solid fa-envelope-open"></i>
              <h3>Email Me</h3>
              <p><a href='mailto:vrushalikhedkar0704@gmail.com'>vrushalikhedkar0704@gmail.com</a></p>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className="fa-solid fa-phone"></i>
              <h3>Call Me</h3>
              <p><a href='tel:+918080943319'>+91-8080943319</a></p>
            </div>
          </div>
        </div>
        <form className='contact-fom mt-4'>
          <div className='row'>
            <div className='col-md-6 form-group'>
              <input
                type='text'
                name='Fullname'
                className='form-control'
                id='name'
                placeholder='Your Name'

              />
            </div>
            <div className='col-md-6 form-group mt-3 mt-md-0'>
              <input
                type='email'
                name='email'
                className='form-control'
                id='email'
                placeholder='Your email'
              />
            </div>
          </div>
          <div className='form-group mt-3'>
            <input
              type='text'
              name='subject'
              className='form-control'
              id='subject'
              placeholder='subject'
            />
          </div>
          <div className='form-group mt-3'>
            <textarea
              name='message'
              className='form-control'
              placeholder='Message'
              style={{ height: "200px" }}
            />
          </div>
          <div className='text-center'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
