import React from 'react';
import './Contact.scss';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlined from '@material-ui/icons/MailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
/* import {
  FormControl, InputLabel, Input, FormHelperText,
} from '@material-ui/core'; */
import information from '../../constants/information-jose';

export default function Contact() {
  return (
    <main
      className="contact"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >

      <section className="contact__info">
        <h1>Contact</h1>
        <hr className="line" />

        <div className="contact__target">
          <div className="target">
            {' '}
            <div className="icon">
              <MailOutlined style={{ fontSize: 40 }} />
            </div>
            {information.personal.email}

          </div>
          <div className="target">
            {' '}
            <div className="icon">
              <PhoneIphoneIcon style={{ fontSize: 40 }} />
            </div>
            {information.personal.phone}

          </div>

          <a className="target" href={information.personal.linkedin}>

            <div className="icon">
              <LinkedInIcon style={{ fontSize: 40 }} />
            </div>
            Linkedin
          </a>

        </div>

        <h3>How I can help you?</h3>

        <div className="formcontrol">
          <div className="inputs">
            <label htmlFor="fullname">
              <input type="text" name="fullname" className="fullname" placeholder="Full Name" />
            </label>
            <label htmlFor="email-address">
              <input type="text" name="email-address" className="email-address" placeholder="Email Address" />
            </label>
            <label htmlFor="subject">
              <input type="text" name="subject" className="subject" placeholder="Subject" />
            </label>
          </div>
          <label htmlFor="message">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" />
          </label>
        </div>
        <input type="submit" className="btn btn--blue" value="Send message" />

        {/*    <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

          <input type="submit" className="btn btn--blue" value="Send message" />
        </FormControl>
 */}
      </section>
    </main>

  );
}
