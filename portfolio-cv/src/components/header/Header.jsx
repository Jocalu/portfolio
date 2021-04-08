import React from 'react';
import './Header.scss';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import information from '../../constants/information-jose';

export default function Header() {
  return (
    <header
      data-aos="fade-right"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1200"
      data-aos-delay="2500"
    >

      <div className="profile">
        <img src={information.personal.photoURL} alt={information.personal.name} />
        <p className="name">{information.personal.name}</p>
        <p className="profession">{information.personal.profession}</p>
        <p className="profile__contact">{information.personal.email}</p>
        <p className="profile__contact">{information.personal.phone}</p>
        <div className="media">
          <a
            href={information.personal.linkedin}
            className="media__icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href={information.personal.github}
            className="media__icon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>

      </div>

      <nav>
        <Link to="/about-me" className="link">
          <hr />
          About Me
          <ChevronRightIcon className="icon" />
        </Link>

        <Link to="/resume" className="link">
          <hr />
          Resume
          <ChevronRightIcon className="icon" />
        </Link>

        <Link to="/formation" className="link">
          <hr />
          Experience
          <br />
          & Education
          <ChevronRightIcon className="icon" />
        </Link>

        <Link to="/projects" className="link">
          <hr />
          Projects
          <ChevronRightIcon className="icon" />
        </Link>

        <Link to="/contact" className="link">
          <hr />
          Contact
          <ChevronRightIcon className="icon" />
        </Link>
      </nav>

    </header>

  );
}
