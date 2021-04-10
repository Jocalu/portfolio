import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Resume from './Resume';
import information from '../../constants/informationEN';

describe('Given a Resume component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('resume');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a resume component', () => {
      act(() => {
        render(<Resume information={information} />, container);
      });
      const resume = container.querySelector('resume');

      expect(resume).toBeDefined();
    });
  });
});
