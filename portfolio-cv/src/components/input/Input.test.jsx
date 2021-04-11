import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Input from './Input';
import '@testing-library/jest-dom/extend-expect';

describe('Given a Input component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('Input');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a input component', () => {
      const placeholder = '';
      const errorMessage = '';
      const name = '';
      const type = '';
      const state = { inputField: '', valid: '' };
      const regex = new RegExp();
      const format = '';
      const setState = jest.fn();
      act(() => {
        render(
          <Input
            placeholder={placeholder}
            errorMessage={errorMessage}
            name={name}
            type={type}
            state={state}
            setState={setState}
            regex={regex}
            format={format}
          />,
          container,
        );
      });
      const input = container.querySelector('input');

      expect(input).toBeDefined();
    });
  });
});
