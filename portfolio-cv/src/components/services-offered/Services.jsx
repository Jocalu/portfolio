import React from 'react';
import './Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import information from '../../constants/information-jose-EN';

export default function Services() {
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
