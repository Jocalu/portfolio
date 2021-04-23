import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from './Form';
import information from '../../constants/informationEN';
import '@testing-library/jest-dom/extend-expect';

describe('Given a Form component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a div with inputs class', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Form
              information={information}

            />
          </BrowserRouter>, container,
        );
      });
      const divForm = container.querySelector('.inputs');

      expect(divForm).toBeDefined();
    });
  });
});
