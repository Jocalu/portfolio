import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import {
  fireEvent,
} from '@testing-library/react';
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
  describe('When button is clicked', () => {
    test('Then should call setLanguage function with EN language', () => {
      const setLanguage = jest.fn();
      const language = 'EN';
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
      const button = container.querySelector('button');
      fireEvent.click(button);
      expect(setLanguage).not.toHaveBeenCalled();
    });
    test('Then should call setLanguage function with ES language', () => {
      const setLanguage = jest.fn();
      const language = 'ES';
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
      const button = container.querySelector('button');
      fireEvent.click(button);
      expect(setLanguage).not.toHaveBeenCalled();
    });
  });
});
