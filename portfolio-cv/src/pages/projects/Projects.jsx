import React from 'react';
import PropTypes from 'prop-types';
import ProjectsCard from '../../components/projects-card/ProjectsCard';
import './Projects.scss';

export default function Projects({ information }) {
  return (
    <main
      className="projects"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <h3>{information.menu.page5}</h3>
      <ProjectsCard projects={information.projects} />
    </main>
  );
}

Projects.propTypes = {
  information: PropTypes.shape({
    projects: PropTypes.shape({}).isRequired,
    menu: PropTypes.shape({
      page5: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
