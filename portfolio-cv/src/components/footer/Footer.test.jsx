import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

describe('Given a Footer component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('footer');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a footer component', () => {
      act(() => {
        render(<Footer />, container);
      });
      const footer = container.querySelector('footer');

      expect(footer).toBeDefined();
    });
  });
});
