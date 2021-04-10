import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AboutMe from './AboutMe';
import information from '../../constants/informationEN';

describe('Given a AboutMe component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('about-me');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a about-me component', () => {
      act(() => {
        render(<AboutMe information={information} />, container);
      });
      const aboutMe = container.querySelector('about-me');

      expect(aboutMe).toBeDefined();
    });
  });
});
