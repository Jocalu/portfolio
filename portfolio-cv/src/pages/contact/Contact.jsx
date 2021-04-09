import React, { useState } from 'react';
import './Contact.scss';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlined from '@material-ui/icons/MailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import information from '../../constants/information-jose-EN';

export default function Contact() {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
    send: false,
  });

  const handleChanges = (event) => {
    setData({
      ...data,
      [event.target.fullname]: event.target.value,
      send: true,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
  };

  return (
    <main
      className="contact"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >

      <section className="contact__info">
        <h1>{information.menu.page6}</h1>
        <hr className="line" />

        <div className="contact__target">
          <a
            className="target"
            href={`mailto:${information.personal.email}`}
          >
            <div className="icon">
              <MailOutlined style={{ fontSize: 40 }} />
            </div>
            <p>{information.personal.email}</p>

          </a>

          <a
            className="target"
            href={`tel:${information.personal.phone}`}
          >
            <div className="icon">
              <PhoneIphoneIcon style={{ fontSize: 40 }} />
            </div>
            <p>{information.personal.phone}</p>
          </a>

          <a
            className="target"
            href={information.personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >

            <div className="icon">
              <LinkedInIcon style={{ fontSize: 40 }} />
            </div>
            <p>{information.menu.title4}</p>
          </a>

        </div>

        <h3>{information.menu.title5}</h3>

        <form
          className="formcontrol"
          onSubmit={sendData}
        >

          <div className="inputs">

            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                onChange={handleChanges}

              />
            </label>

            <label htmlFor="email-address">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChanges}

              />
            </label>

            <label htmlFor="subject">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChanges}

              />
            </label>
            <button
              type="button"
              className="btn btn--blue"
            >
              {information.menu.title6}
            </button>

            {/* <input
              type="submit"
              className="btn btn--blue"
              value="Send message"
            /> */}
          </div>

          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={handleChanges}
            />
          </label>
        </form>
      </section>
    </main>

  );
}
