import React from 'react';
import './Formation.scss';
import information from '../../constants/information-jose';

export default function Formation() {
  return (
    <main
      className="formation"
      data-aos="fade-up-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <h3>Experience</h3>
      {information.experience.forEach((job) => {
        <div className="a">
          <div className="b" />
          <ul className="c">
            <li className="d">
              <div className="e">
                <div className="g" />
                <div className="h">{job.place}</div>

              </div>
              <div className="f">{job.description.join(' ')}</div>
            </li>
          </ul>
        </div>;
      })}

    </main>
  );
}
