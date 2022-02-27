import React from 'react';
import './Contact.css';
import { ReactComponent as GithubIcon } from '../../../resources/images/section-images/github-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../resources/images/section-images/instagram-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../../resources/images/section-images/linkedin-icon.svg';
import { ReactComponent as EmailIcon } from '../../../resources/images/section-images/email-icon.svg';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-info'>
        <div className='email-section'>
          <h2>Email Me</h2>
          <p>Email me for talking about any work opportunities or to ask for my CV.</p>
          <div className='email-icon-container'>
            <a href='mailto:granitdula98@gmail.com'><EmailIcon className='email-icon-image'/></a>
          </div>
        </div>
        <div className='social-media-section'>
          <h2>Social Media</h2>
          <div className='icon-container'>
            <a href='https://github.com/granitdula' target='_blank'><GithubIcon className='icon-image'/></a>
            <a href='https://www.instagram.com/granitdula/' target='_blank'><InstagramIcon className='icon-image'/></a>
            <a href='https://www.linkedin.com/in/granit-dula-9bb02a176/' target='_blank'>
              <LinkedinIcon className='icon-image'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact