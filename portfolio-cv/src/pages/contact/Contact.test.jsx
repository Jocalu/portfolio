import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contact from './Contact';
import information from '../../constants/informationEN';

describe('Given a Contact component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('contact');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a contact component', () => {
      act(() => {
        render(<Contact information={information} />, container);
      });
      const contact = container.querySelector('contact');

      expect(contact).toBeDefined();
    });
  });
});
