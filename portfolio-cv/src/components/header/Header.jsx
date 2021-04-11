import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

export default function Header({ information, setLanguage, language }) {
  return (
    <>
      <div className="language">
        {language === 'EN'
          ? (
            <button
              type="button"
              onClick={(() => setLanguage('ES'))}
            >
              ES
            </button>
          )
          : (
            <button
              type="button"
              onClick={(() => setLanguage('EN'))}
            >
              EN
            </button>
          )}
      </div>
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
            {information.menu.page1}
            <ChevronRightIcon className="icon" />
          </Link>

          <Link to="/resume" className="link">
            <hr />
            {information.menu.page2}
            <ChevronRightIcon className="icon" />
          </Link>

          <Link to="/formation" className="link">
            <hr className="short" />
            {`${information.menu.page3} & ${information.menu.page4}`}
            <ChevronRightIcon className="icon" />
          </Link>

          <Link to="/projects" className="link">
            <hr />
            {information.menu.page5}
            <ChevronRightIcon className="icon" />
          </Link>

          <Link to="/contact" className="link">
            <hr />
            {information.menu.page6}
            <ChevronRightIcon className="icon" />
          </Link>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  information: PropTypes.shape({
    personal: PropTypes.shape({
      name: PropTypes.string.isRequired,
      photoURL: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
    menu: PropTypes.shape({
      page1: PropTypes.string.isRequired,
      page2: PropTypes.string.isRequired,
      page3: PropTypes.string.isRequired,
      page4: PropTypes.string.isRequired,
      page5: PropTypes.string.isRequired,
      page6: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
