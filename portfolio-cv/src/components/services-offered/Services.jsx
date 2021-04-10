import React from 'react';
import PropTypes from 'prop-types';
import './Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services({ information }) {
  return (
    <>
      {information.services.map((service) => (
        <div key={service.name} className="services__description">
          <div className="title">
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={service.icon} />
            </div>
            <h4>{service.name}</h4>
          </div>
          <p>{service.description}</p>
        </div>
      ))}
    </>
  );
}

Services.propTypes = {
  information: PropTypes.shape({
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
