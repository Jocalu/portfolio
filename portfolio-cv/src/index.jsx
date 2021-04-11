import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function renderToDom() {
  const root = document.getElementById('root');
  if (root !== null) {
    ReactDOM.render(
      <App />, root,
    );
  }
}
renderToDom();
