import React from 'react';
import PropTypes from 'prop-types';
import './Opening.scss';

export default function Opening({ information }) {
  return (
    <section className="opening">
      <div className="title">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/jc-black.png?alt=media&token=f928231a-845c-4739-b67c-865a6cac2141" alt="logo" />
          <p>{information.personal.name}</p>
        </div>
        <p>{information.personal.profession}</p>
      </div>
    </section>
  );
}

Opening.propTypes = {
  information: PropTypes.shape([{}]).isRequired,
};
