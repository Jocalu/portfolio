import React from 'react';
import './AboutMe.scss';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Link } from 'react-router-dom';
import information from '../../constants/information-jose';
import Recommendations from '../../components/recommendations/Recommendations';

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

          <p className="info">{information.sumary.info[0]}</p>
          <p className="info">{information.sumary.info[1]}</p>
          <p className="info">{information.sumary.info[2]}</p>
          <button type="button" className="btn btn--blue">Download CV</button>
          <Link to="/contact" type="button" className="btn">
            Contact
          </Link>

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

          <Recommendations />
          <Recommendations />
        </div>

      </section>
    </main>
  );
}
