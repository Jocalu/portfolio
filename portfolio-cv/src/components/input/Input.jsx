import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

export default function Input({
  placeholder,
  errorMessage,
  name,
  type,
  state,
  setState,
  regex,
  format,
}) {
  const onChange = (event) => {
    setState({ ...state, inputField: event.target.value });
  };

  const validation = () => {
    if (
      regex.test(state.inputField)) {
      setState({ ...state, valid: 'true' });
    } else {
      setState({ ...state, valid: 'false' });
    }
  };

  return (
    <>
      {format === 'input'
          && (
          <label htmlFor={name} className={format}>
            <input
              className={`input--${state.valid}`}
              type={type}
              name={name}
              placeholder={placeholder}
              regex={regex}
              value={state.inputField}
              onChange={onChange}
              onKeyUp={validation}
              onBlur={validation}
              valid={state.valid}
            />
            <p className={state.valid}>{errorMessage}</p>
          </label>
          )}
      {format === 'textarea'
          && (
          <label htmlFor={name} className={format}>
            <textarea
              className={`textarea--${state.valid}`}
              type={type}
              name={name}
              placeholder={placeholder}
              regex={regex}
              value={state.inputField}
              onChange={onChange}
              onKeyUp={validation}
              onBlur={validation}
              valid={state.valid}
            />
            <p className={state.valid}>{errorMessage}</p>
          </label>
          )}
    </>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  regex: PropTypes.instanceOf(RegExp).isRequired,
  format: PropTypes.string.isRequired,
  state: PropTypes.shape({
    inputField: PropTypes.string.isRequired,
    valid: PropTypes.string.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
};
