import React from 'react';
import './Resume.scss';
import { Chip, makeStyles } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import information from '../../constants/information-jose-EN';
import Recommendations from '../../components/recommendations/Recommendations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <main
      className="resume"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="skills">
        <div className="soft-skills">
          <h3>{information.menu.title7}</h3>
          {information.softskills.map((skill) => (
            <div key={skill.name} className="skills-bars">
              <label htmlFor={skill.name}>
                {skill.name}
                <div>
                  {skill.ability}
                  %
                </div>
              </label>
              <div className="progress">
                <div
                  className="bar"
                  style={{ width: `${skill.ability}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hard-skills">
          <h3>{information.menu.title8}</h3>

          <div className={classes.root}>
            {information.hardskills.map((skill) => (
              <Chip
                key={skill.name}
                className="chip"
                icon={skill.icon !== '' ? <FontAwesomeIcon icon={skill.icon} /> : ''}
                label={skill.name}
                clickable
                color="primary"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="recommendations">
        <h3>{information.menu.title9}</h3>
        <Recommendations person={information.recommendations.diana} />
        <Recommendations person={information.recommendations.alvaro} />
      </section>

    </main>

  );
}
