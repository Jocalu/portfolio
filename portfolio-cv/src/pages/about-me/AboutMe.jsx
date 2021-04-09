import React from 'react';
import './AboutMe.scss';
import Snackbar from '@material-ui/core/Snackbar';
import information from '../../constants/information-jose-EN';
import Services from '../../components/services-offered/Services';

export default function AboutMe() {
  const [state, setState] = React.useState({
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
          Hi, I'm
          <b>
            <br />
            {information.personal.name}
          </b>
        </p>
        {information.resume.info.map((info) => <p className="info">{info}</p>)}

        <div className="buttons">
          <a
            href="https://filetools6.pdf24.org/client.php?mode=inline&file=joinPdf_988d7cbf0819d1190467487bcec93733_11765397958148308061.pdf&action=getFile"
            className="btn btn--blue"
            target="_blank"
            rel="noreferrer"
            onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
          >
            Redirect to CV
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
