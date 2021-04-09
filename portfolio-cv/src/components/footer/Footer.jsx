import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import information from '../../constants/informationEN';

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href={`tel:${information.personal.phone}`}
      >
        <PhoneIcon className="footer__icon" />
      </a>
      <a
        href={information.personal.github}
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className="footer__icon" />
      </a>
      <a
        href={information.personal.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className="footer__icon" />
      </a>
    </footer>
  );
}
