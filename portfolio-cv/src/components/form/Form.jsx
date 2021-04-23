import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import emailjs from 'emailjs-com';
import emailjsConfig from '../../environment';
import Input from '../input/Input';

export default function Form({ information }) {
  const unchecked = 'unchecked';
  const [send, setSend] = useState('');
  const [name, setName] = React.useState({ inputField: '', valid: unchecked });
  const [email, setEmail] = React.useState({ inputField: '', valid: unchecked });
  const [subject, setSubject] = React.useState({ inputField: '', valid: unchecked });
  const [message, setMessage] = React.useState({ inputField: '', valid: unchecked });

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

    name.inputField = '';
    email.inputField = '';
    subject.inputField = '';
    message.inputField = '';
  };

  const regex = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    subject: /^[\s\S]{1,50}$/,
    message: /^[\s\S]{1,500}$/,
  };

  return (

    <form
      onSubmit={sendEmail}
      className="formcontrol"
    >
      <div className="inputs">
        <Input
          format="input"
          state={name}
          setState={setName}
          type="text"
          name="name"
          placeholder={information.menu.input1}
          errorMessage={information.menu.formMessage1}
          regex={regex.name}
        />
        <Input
          format="input"
          state={email}
          setState={setEmail}
          type="text"
          name="name"
          placeholder={information.menu.input2}
          errorMessage={information.menu.formMessage2}
          regex={regex.email}
        />
        <Input
          format="input"
          state={subject}
          setState={setSubject}
          type="text"
          name="name"
          placeholder={information.menu.input3}
          errorMessage={information.menu.formMessage3}
          regex={regex.subject}
        />

        <button
          disabled={
            name.valid !== 'true'
            || email.valid !== 'true'
            || subject.valid !== 'true'
            || message.valid !== 'true'
}
          type="submit"
          className={send === '' ? 'btn btn--blue'
            : send === 'send' ? 'btn btn--green' : 'btn btn--red'}
        >
          {send === '' ? information.menu.title6
            : send === 'send' ? information.menu.message1 : information.menu.message2}
        </button>
      </div>

      <Input
        format="textarea"
        state={message}
        setState={setMessage}
        type="text"
        name="name"
        placeholder={information.menu.input4}
        errorMessage={information.menu.formMessage4}
        regex={regex.message}
      />
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
      message1: PropTypes.string.isRequired,
      message2: PropTypes.string.isRequired,
      formMessage1: PropTypes.string.isRequired,
      formMessage2: PropTypes.string.isRequired,
      formMessage3: PropTypes.string.isRequired,
      formMessage4: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
