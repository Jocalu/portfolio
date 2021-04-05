import React from 'react';
import './Recommendations.scss';
import info from '../../constants/information-jose';

export default function Recommendations() {
  return (

    <div className="recommendations__target">
      <img
        src={info.recommendations.diana.photoURL}
        alt={info.recommendations.diana.name}
      />
      <p className="recommendations__desc">{info.recommendations.diana.description}</p>
      <p className="recommendations__name">{info.recommendations.diana.name}</p>
      <p className="recommendations__pos">{info.recommendations.diana.position}</p>
    </div>
  );
}
