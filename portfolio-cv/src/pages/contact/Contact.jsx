import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlined from '@material-ui/icons/MailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Snackbar from '@material-ui/core/Snackbar';

export default function Contact({ information }) {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
    send: true,
  });

  const handleChanges = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.fullname]: event.target.value,
      send: false,
    });
  };

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
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
        >

          <div className="inputs">

            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                placeholder={information.menu.input1}
                onChange={handleChanges}
              />
            </label>

            <label htmlFor="email-address">
              <input
                type="email"
                name="email"
                placeholder={information.menu.input2}
                onChange={handleChanges}
              />
            </label>

            <label htmlFor="subject">
              <input
                type="text"
                name="subject"
                placeholder={information.menu.input3}
                onChange={handleChanges}
              />
            </label>
            <button
              type="button"
              className="btn btn--blue"
              onClick={(() => setData({ ...data, send: true }), handleClick({ vertical: 'top', horizontal: 'right' }))}
            >
              {information.menu.title6}
            </button>

            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message={`✅ ${information.menu.message}`}
              key={vertical + horizontal}
            />
          </div>

          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder={information.menu.input4}
              onChange={handleChanges}
            />
          </label>
        </form>
      </section>
    </main>

  );
}

Contact.propTypes = {
  information: PropTypes.shape({
    personal: PropTypes.shape({
      profession: PropTypes.string.isRequired,
      photoURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photoCoverURL: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
    }).isRequired,
    menu: PropTypes.shape({
      title1: PropTypes.string.isRequired,
      title2: PropTypes.string.isRequired,
      title3: PropTypes.string.isRequired,
      title4: PropTypes.string.isRequired,
      title5: PropTypes.string.isRequired,
      title6: PropTypes.string.isRequired,
      page6: PropTypes.string.isRequired,
      input1: PropTypes.string.isRequired,
      input2: PropTypes.string.isRequired,
      input3: PropTypes.string.isRequired,
      input4: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
