import React from 'react';
import ProjectsCard from '../../components/projects-card/ProjectsCard';
import './Projects.scss';
import information from '../../constants/information-jose';

export default function Projects() {
  return (
    <main
      className="projects"
      data-aos="fade-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >

      <ProjectsCard projects={information.projects} />
    </main>
  );
}
