import React from 'react';
import './AboutMe.scss';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import information from '../../constants/information-jose';

export default function AboutMe() {
  return (
    <main
      className="aboutme"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="aboutme__info">
        <div>
          <p className="profession">
            {information.personal.profession}
          </p>
          <p className="name">
            Hi, I'm
            {' '}
            <b>
              {information.personal.name}
              .
            </b>
          </p>
          <p className="info">{information.resume.info.join('\n')}</p>
          <button type="button" className="btn btn--blue">Download CV</button>
          <button type="button" className="btn">
            <a href={`mailto:${information.personal.email}`}>Contact</a>
          </button>

        </div>

        <div className="image"><img src={information.personal.photoCoverURL} alt={information.personal.name} /></div>

      </section>

      <section>
        <div className="whatido">
          {' '}
          <h3>What I do</h3>
          <div className="whatido__desc">
            <div className="icon">
              <LocalGroceryStoreIcon />
            </div>

            <div>
              <h4>Ecommerce</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur enim unde quasi ducimus nam?
                {' '}

              </p>
            </div>

          </div>
          <div className="whatido__desc">
            <div className="icon">
              <ImportantDevicesIcon />
            </div>

            <div>
              <h4>Web design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur enim unde quasi ducimus nam?
                {' '}

              </p>
            </div>

          </div>
        </div>
        <div className="recommendations">
          <h3>Recommendations</h3>
          <div className="recommendations__target">
            <img
              src={information.recommendations.gilberto.photoURl}
              alt={information.recommendations.gilberto.name}
            />
            <p className="recommendations__desc">{information.recommendations.gilberto.description}</p>
            <p className="recommendations__name">{information.recommendations.gilberto.name}</p>
            <p className="recommendations__pos">{information.recommendations.gilberto.position}</p>
          </div>
          <div className="recommendations__target">
            <img
              src={information.recommendations.diana.photoURL}
              alt={information.recommendations.diana.name}
            />
            <p className="recommendations__desc">{information.recommendations.diana.description}</p>
            <p className="recommendations__name">{information.recommendations.diana.name}</p>
            <p className="recommendations__pos">{information.recommendations.diana.position}</p>
          </div>
        </div>

      </section>
    </main>
  );
}
