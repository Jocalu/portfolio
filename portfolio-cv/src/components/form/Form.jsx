import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import emailjs from 'emailjs-com';
import emailjsConfig from '../../environment';

export default function Form({ information }) {
  const [send, setSend] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(emailjsConfig.serviceID, emailjsConfig.templateID, event.target,
      emailjsConfig.userID)
      .then(() => {
        setSend('send');
        setTimeout(() => { setSend(''); }, 2000);
      }, () => {
        setSend('error');
        setTimeout(() => { setSend(''); }, 2000);
      });
    event.target.reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      className="formcontrol"
    >

      <div className="inputs">

        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder={information.menu.input1}
          />
        </label>

        <label htmlFor="email-address">
          <input
            type="email"
            name="email"
            placeholder={information.menu.input2}
          />
        </label>

        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            placeholder={information.menu.input3}
          />
        </label>
        <button
          type="submit"
          className={send === '' ? 'btn btn--blue'
            : send === 'send' ? 'btn btn--green' : 'btn btn--red'}
        >
          {send === '' ? information.menu.title6
            : (send === 'send' ? information.menu.message : information.menu.message2)}

        </button>
      </div>

      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder={information.menu.input4}
        />
      </label>
    </form>

  );
}

Form.propTypes = {
  information: PropTypes.shape({
    menu: PropTypes.shape({
      title6: PropTypes.string.isRequired,
      input1: PropTypes.string.isRequired,
      input2: PropTypes.string.isRequired,
      input3: PropTypes.string.isRequired,
      input4: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      message2: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
