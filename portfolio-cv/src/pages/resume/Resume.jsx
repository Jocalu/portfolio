import React from 'react';
import './Resume.scss';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import information from '../../constants/information-jose';

export default function Resume() {
  return (
    <main
      className="resume"
      data-aos="flip-down"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <div className="skills__hard">
        <h3>Hard skills</h3>
        <div className="container">
          {information.skills.hardskills.map((skill) => (
            <div key={`hard ${skill.name}`} className="circular">
              <p>{skill.name}</p>
              <CircularProgress className="circle" value={skill.ability} color="blue">
                <CircularProgressLabel>{`${skill.ability}%` }</CircularProgressLabel>
              </CircularProgress>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="skills__soft">
          <h3>Soft skills</h3>
          {' '}
          {information.skills.softskills.map((skill) => (
            <div>
              <label key={`soft ${skill.name}`} htmlFor={skill.name}>
                {skill.name}

              </label>
              <progress className="progress" max="100" value={skill.ability}>{skill.ability}</progress>
            </div>
          ))}

        </div>
        <div className="skills__languages">

          <h3>Programming languages</h3>
          <div className="icons__languages">
            {information.skills.programmingLanguages.map((skill) => (
              <div className="icon" key={`icon ${skill.name}`}>
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>

  );
}
