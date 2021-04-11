import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import information from './constants/informationEN';

describe('Given a App component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('app');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a app component', () => {
      act(() => {
        render(
          <App information={information} />,
          container,
        );
      });
      const app = container.querySelector('app');

      expect(app).toBeDefined();
    });
  });
});
