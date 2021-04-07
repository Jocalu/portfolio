import React from 'react';
import './Resume.scss';
import { Chip, makeStyles } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import information from '../../constants/information-jose';
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
      data-aos="flip-down"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <section className="skills">
        <div className="soft-skills">
          <h3>Soft skills</h3>
          {information.softskills.map((skill) => (
            <div key={skill.name} className="skills-bars">
              <label htmlFor={skill.name}>
                {skill.name}
                <div>
                  {skill.ability}
                  %
                </div>
              </label>
              <progress
                max="100"
                value={skill.ability}
              >
                {skill.ability}
              </progress>
            </div>
          ))}
        </div>

        <div className="hard-skills">
          <h3>Hard skills</h3>

          <div className={classes.root}>
            {information.hardskills.map((skill) => (
              <Chip
                key={skill.name}
                className="chip"
                icon={<FontAwesomeIcon icon={skill.icon} />}
                label={skill.name}
                color="primary"
                clickable
                variant={skill.programmingLanguage === true ? 'default' : 'outlined'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="recommendations">
        <h3>Recommendations</h3>
        <Recommendations person={information.recommendations.diana} />
        <Recommendations person={information.recommendations.alvaro} />
      </section>

    </main>

  );
}
