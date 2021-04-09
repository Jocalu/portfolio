import React from 'react';
import information from '../../constants/information-jose-EN';
import './Opening.scss';

export default function Opening() {
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
