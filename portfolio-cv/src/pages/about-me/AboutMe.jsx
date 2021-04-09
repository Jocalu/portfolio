/* eslint-disable no-console */
import React, { useState } from 'react';
import './AboutMe.scss';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import information from '../../constants/information-jose';
import Services from '../../components/services-offered/Services';

export default function AboutMe() {
  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [count, setCount] = useState('');

  const changeTime = () => {
    setCount(localStorage.setItem('count', '1'));
  };

  return (
    <main
      className="aboutme"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration={localStorage.getItem('count', count) !== '1' ? '1200' : '400'}
      data-aos-delay={localStorage.getItem('count', count) !== '1' ? '2500' : '0'}
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
          Hi, I'm
          <b>
            <br />
            {information.personal.name}
          </b>
        </p>
        {information.resume.info.map((info) => <p className="info">{info}</p>)}

        <div className="buttons">

          <button onClick={changeTime} className="btn" type="button">State</button>
          <Link
            to="/Users/Jocalu/Desktop/Portfolio/portfolio-cv/src/files/jose-carcamo-web-developer-2021.pdf"
            type="button"
            className="btn btn--blue"
            target="_blank"
            download
            onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
          >
            Download CV
          </Link>

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="✅ Downloaded successfully"
            key={vertical + horizontal}
          />
          {/*   <Link
            to="/contact"
            type="button"
            className="btn"
          >
            Contact
          </Link> */}
          <a href={`mailto:${information.personal.email}`} className="btn">
            Contact
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
        <h3>What I do</h3>
        <Services />
      </section>

    </main>
  );
}
