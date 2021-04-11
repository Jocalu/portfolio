import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import emailjs from 'emailjs-com';
import emailjsConfig from '../../environment';
import Input from '../input/Input';

export default function Form({ information }) {
  const [send, setSend] = useState('');
  const [name, setName] = useState({ inputField: '', valid: null });
  const [email, setEmail] = useState({ inputField: '', valid: null });
  const [subject, setSubject] = useState({ inputField: '', valid: null });
  const [message, setMessage] = useState({ inputField: '', valid: null });

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

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    subject: /^[\s\S]{1,50}$/,
    message: /^[\s\S]{0,250}$/,
  };

  return (
    <form
      onSubmit={sendEmail}
      className="formcontrol"
    >

      <div className="inputs">

        <Input
          state={name}
          setState={setName}
          type="text"
          name="name"
          placeholder={information.menu.input1}
          errorMessage="El nombre debe contener máximo 40 carácteres y sólo puede contener letras"
          expressions={expressions.name}
        />
        <Input
          state={email}
          setState={setEmail}
          type="text"
          name="name"
          placeholder={information.menu.input1}
          errorMessage="El nombre debe contener máximo 40 carácteres y sólo puede contener letras"
        />
        <Input
          state={subject}
          setState={setSubject}
          type="text"
          name="name"
          placeholder={information.menu.input1}
          errorMessage="El nombre debe contener máximo 40 carácteres y sólo puede contener letras"
        />
        <Input
          state={message}
          setState={setMessage}
          type="text"
          name="name"
          placeholder={information.menu.input1}
          errorMessage="El nombre debe contener máximo 40 carácteres y sólo puede contener letras"
        />

        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder={information.menu.input1}
            errorMessage="El nombre debe contener máximo 40 carácteres y sólo puede contener letras"
          />
        </label>

        <label htmlFor="email-address">
          <input
            type="email"
            name="email"
            placeholder={information.menu.input2}
            errorMessage="Email no válido"
          />
        </label>

        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            placeholder={information.menu.input3}
            errorMessage="Máximo 50 carácteres"
          />
        </label>

        <button
          type="submit"
          className={send === '' ? 'btn btn--blue'
            : send === 'send' ? 'btn btn--green' : 'btn btn--red'}
        >
          {send === '' ? information.menu.title6
            : send === 'send' ? information.menu.message : information.menu.message2}
        </button>
      </div>

      <label htmlFor="message">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder={information.menu.input4}
          errorMessage="Máximo 250 carácteres"
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
