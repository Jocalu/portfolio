/* eslint-disable no-console */
import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

export default function Input({
  placeholder, errorMessage, name, type, state, setState, regex,
}) {
  const onChange = (event) => {
    setState({ ...state, inputField: event.target.value });
  };

  const validation = () => {
    if (
      regex.test(state.inputField)) { console.log('correcto'); } console.log('incorrecto');
  };

  return (
    <label htmlFor={name}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        regex={regex}
        value={state.inputField}
        onChange={onChange}
        onKeyUp={validation}
        onBlur={validation}
      />
      {false
      && <p>{errorMessage}</p>}
    </label>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
  state: PropTypes.shape({
    inputField: PropTypes.string.isRequired,
  }).isRequired,
  setState: PropTypes.shape({}).isRequired,
};
