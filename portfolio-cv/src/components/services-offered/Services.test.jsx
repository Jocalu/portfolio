import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Services from './Services';
import information from '../../constants/informationEN';

describe('Given a Services component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('services');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a services component', () => {
      act(() => {
        render(<Services information={information} />, container);
      });
      const services = container.querySelector('services');

      expect(services).toBeDefined();
    });
  });
});
