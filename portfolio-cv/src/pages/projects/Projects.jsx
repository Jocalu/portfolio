import React from 'react';
import ProjectsCard from '../../components/projects-card/ProjectsCard';
import './Projects.scss';

export default function Projects() {
  return (
    <main
      className="projects"
      data-aos="fade-down-left"
      data-aos-offset="0"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >

      <ProjectsCard />
    </main>
  );
}
