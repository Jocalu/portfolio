import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './ProjectsCard.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsCard({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={project.name}
              height="100"
              image={project.image}
              title={project.name}
            />
            <CardContent>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </CardContent>
          </CardActionArea>
          <CardActions className="card__actions">
            {project.github !== ''
            && (
            <a
              href={project.github}
              className="media__icon"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="media__icon" />
            </a>
            )}
            {project.url !== ''
            && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="media__icon"
            >
              <LanguageIcon className="media__icon" />
            </a>
            )}
            {project.video !== ''
            && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="media__icon"
            >
              <PlayCircleFilledWhiteOutlinedIcon className="media__icon" />
            </a>
            )}
            <FontAwesomeIcon className="media__icon technology" icon={project.technology.icon} />
          </CardActions>
        </Card>
      ))}
    </>
  );
}

ProjectsCard.propTypes = {
  projects: PropTypes.shape([{
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    technology: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }]).isRequired,
};
