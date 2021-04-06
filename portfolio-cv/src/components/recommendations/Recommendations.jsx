/* eslint-disable no-console */
import React from 'react';
import './Recommendations.scss';
import PropTypes from 'prop-types';

export default function Recommendations({
  photoURL, name, description, position,
}) {
  return (

    <div className="recommendations__target">
      <img
        src={photoURL}
        alt={name}
      />
      <p className="recommendations__desc">
        hello,
        {console.log(description)}
      </p>
      <p className="recommendations__name">{name}</p>
      <p className="recommendations__pos">{position}</p>
    </div>
  );
}

Recommendations.propTypes = {
  photoURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
