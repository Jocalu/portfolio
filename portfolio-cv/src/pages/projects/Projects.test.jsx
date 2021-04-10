import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Projects from './Projects';
import information from '../../constants/informationEN';

describe('Given a Projects component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('projects');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a projects component', () => {
      act(() => {
        render(<Projects information={information} />, container);
      });
      const projects = container.querySelector('projects');

      expect(projects).toBeDefined();
    });
  });
});
