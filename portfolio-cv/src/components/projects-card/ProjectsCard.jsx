import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './ProjectsCard.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import information from '../../constants/information-jose';

export default function ProjectsCard() {
  return (
    <>
      {information.projects.map((project) => (
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={project.name}
              height="140"
              image={project.image}
              title={project.name}
            />
            <CardContent>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon />
            </Button>
            <Button size="small" color="primary">
              <LanguageIcon />
            </Button>
            <Button size="small" color="primary">
              <PlayCircleFilledWhiteOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

ProjectsCard.propTypes = {
  project: PropTypes.shape({
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
  }).isRequired,
};
