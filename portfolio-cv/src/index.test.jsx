import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReactDOM from './index';

describe('Given a ReactDOM component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('reactDOM');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a reactDOM component', () => {
      act(() => {
        render(<ReactDOM />, container);
      });
      const reactDOM = container.querySelector('reactDOM');

      expect(reactDOM).toBeDefined();
    });
  });
});
