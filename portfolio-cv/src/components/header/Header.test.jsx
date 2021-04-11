import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import Header from './Header';
import information from '../../constants/informationEN';
import '@testing-library/jest-dom/extend-expect';

describe('Given a Header component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('header');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When is invoked', () => {
    test('Then should rend a header component', () => {
      const setLanguage = jest.fn();
      const language = '';
      act(() => {
        render(
          <BrowserRouter>
            <Header
              information={information}
              setLanguage={setLanguage}
              language={language}
            />
          </BrowserRouter>, container,
        );
      });
      const header = container.querySelector('header');

      expect(header).toBeDefined();
    });
    describe('When button is clicked', () => {
      test('Then should call setLanguage function with EN language', () => {
        const setLanguage = jest.fn();
        const language = 'EN';
        act(() => {
          render(
            <BrowserRouter>
              <Header
                information={information}
                setLanguage={setLanguage}
                language={language}
              />
            </BrowserRouter>, container,
          );
        });
        const button = container.querySelector('button');
        fireEvent.click(button);
        expect(setLanguage).toHaveBeenCalled();
      });
      test('Then should call setLanguage function with ES language', () => {
        const setLanguage = jest.fn();
        const language = 'ES';
        act(() => {
          render(
            <BrowserRouter>
              <Header
                information={information}
                setLanguage={setLanguage}
                language={language}
              />
            </BrowserRouter>, container,
          );
        });
        const button = container.querySelector('button');
        fireEvent.click(button);
        expect(setLanguage).toHaveBeenCalled();
      });
    });
  });
});
