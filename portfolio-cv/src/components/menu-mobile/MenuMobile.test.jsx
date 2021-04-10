import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import MenuMobile from './MenuMobile';
import information from '../../constants/informationEN';

describe('Given a MenuMobile component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('menu-mobile');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a menu-mobile component', () => {
      const setLanguage = jest.fn();
      const language = '';
      act(() => {
        render(
          <BrowserRouter>
            <MenuMobile
              information={information}
              setLanguage={setLanguage}
              language={language}
            />
          </BrowserRouter>, container,
        );
      });
      const menuMobile = container.querySelector('menu-mobile');

      expect(menuMobile).toBeDefined();
    });
  });
});
