import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Opening from './Opening';
import information from '../../constants/informationEN';

describe('Given a Opening component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('opening');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a opening component', () => {
      act(() => {
        render(<Opening information={information} />, container);
      });
      const opening = container.querySelector('opening');

      expect(opening).toBeDefined();
    });
  });
});
