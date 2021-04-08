import React from 'react';
import './MenuMobile.scss';
import { Link } from 'react-router-dom';
import { Button, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="menu-mobile">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon className="menu__icon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          to="/about-me"
          className="link"
          onClick={handleClose}
        >
          About Me

        </Link>
        <Link
          to="/resume"
          className="link"
          onClick={handleClose}
        >
          Resume
        </Link>
        <Link
          to="/formation"
          className="link"
          onClick={handleClose}
        >
          Experience & Education
        </Link>
        <Link
          to="/projects"
          className="link"
          onClick={handleClose}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="link"
          onClick={handleClose}
        >
          Contact
        </Link>
      </Menu>
      {/* <PopupState
        variant="popover"
        popupId="demo-popup-menu"
      >
        {(popupState) => (
          <>
            <IconButton
              ariant="contained"
              {...bindTrigger(popupState)}
            >
              <MoreVertIcon className="menu__icon" />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <Link
                to="/about-me"
                className="link"
                onClick={popupState.close}
              >
                About Me

              </Link>
              <Link
                to="/resume"
                className="link"
                onClick={popupState.close}
              >
                Resume
              </Link>
              <Link
                to="/formation"
                className="link"
                onClick={popupState.close}
              >
                Experience & Education
              </Link>
              <Link
                to="/projects"
                className="link"
                onClick={popupState.close}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="link"
                onClick={popupState.close}
              >
                Contact
              </Link>
            </Menu>
          </>
        )}
      </PopupState> */}
    </section>
  );
}
