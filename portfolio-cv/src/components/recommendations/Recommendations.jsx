import React from 'react';
import './Recommendations.scss';
import PropTypes from 'prop-types';
import information from '../../constants/information-jose';

export default function Recommendations() {
  return (

    <div className="recommendations__target">
      <img
        src={information.recommendations.diana.photoURL}
        alt={information.recommendations.diana.name}
      />
      <p className="recommendations__desc">{information.recommendations.diana.description}</p>
      <p className="recommendations__name">{information.recommendations.diana.name}</p>
      <p className="recommendations__pos">{information.recommendations.diana.position}</p>
    </div>
  );
}

Recommendations.propTypes = {
  person: PropTypes.shape({
  }).isRequired,
};
