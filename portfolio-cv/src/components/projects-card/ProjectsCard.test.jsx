import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProjectsCard from './ProjectsCard';
import information from '../../constants/informationEN';

describe('Given a ProjectsCard component', () => {
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
    test('Then should rend an element with card class', () => {
      const { projects } = information;
      act(() => {
        render(<ProjectsCard projects={projects} />, container);
      });
      const cardElement = container.querySelector('.card');

      expect(cardElement).toBeDefined();
    });
  });
});
