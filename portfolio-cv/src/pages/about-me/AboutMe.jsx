import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AboutMe.scss';
import Snackbar from '@material-ui/core/Snackbar';
import Services from '../../components/services-offered/Services';

export default function AboutMe({ information }) {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <main
      className="aboutme"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="aboutme__info">

        <p className="profession">
          {information.personal.profession}
        </p>
        <div className="image">
          <img
            className="photo"
            src={information.personal.photoURL}
            alt={information.personal.name}
          />
        </div>

        <p className="name">
          {information.menu.title1}
          <b>
            <br />
            {information.personal.name}
          </b>
        </p>
        {information.resume.info.map((info) => <p key={info} className="info">{info}</p>)}

        <div className="buttons">
          <a
            href="https://www.yumpu.com/es/document/read/65478024/jose-carcamo-web-developer-2021"
            className="btn btn--blue"
            target="_blank"
            rel="noreferrer"
            onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
          >
            {information.menu.title2}
          </a>

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="✅ Redirected successfully"
            key={vertical + horizontal}
          />
          {/*   <Link
            to="/contact"
            type="button"
            className="btn"
          >
            {information.menu.page6}
          </Link> */}
          <a href={`mailto:${information.personal.email}`} className="btn">
            {information.menu.page6}
          </a>
        </div>

      </section>

      <section className="services">
        <div className="image">
          <img
            src={information.personal.photoCoverURL}
            alt={information.personal.name}
          />
        </div>
        <h3>{information.menu.title3}</h3>
        <Services information={information} />
      </section>

    </main>
  );
}
AboutMe.propTypes = {
  information: PropTypes.shape({
    personal: PropTypes.shape({
      profession: PropTypes.string.isRequired,
      photoURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photoCoverURL: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    menu: PropTypes.shape({
      title1: PropTypes.string.isRequired,
      title2: PropTypes.string.isRequired,
      title3: PropTypes.string.isRequired,
      page6: PropTypes.string.isRequired,
    }).isRequired,
    resume: PropTypes.shape({ info: PropTypes.arrayOf.isRequired }).isRequired,
  }).isRequired,
};
