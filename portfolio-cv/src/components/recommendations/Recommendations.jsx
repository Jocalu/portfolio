import React from 'react';
import './Recommendations.scss';
import PropTypes from 'prop-types';

export default function Recommendations({ person }) {
  return (

    <div className="recommendations__target">
      <img
        src={person.photoURL}
        alt={person.name}
      />
      <p className="recommendations__desc">

        {person.description}
      </p>
      <p className="recommendations__name">{person.name}</p>
      <p className="recommendations__pos">{person.position}</p>
    </div>
  );
}

Recommendations.propTypes = {
  person: PropTypes.shape({
    photoURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
