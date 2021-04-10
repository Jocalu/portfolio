import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Formation from './Formation';
import information from '../../constants/informationEN';

describe('Given a Formation component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('formation');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a formation component', () => {
      act(() => {
        render(<Formation information={information} />, container);
      });
      const formation = container.querySelector('formation');

      expect(formation).toBeDefined();
    });
  });
});
