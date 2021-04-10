import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MenuMobile.scss';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MenuMobile({ information, setLanguage, language }) {
  const [anchorEl, setAnchorEl] = useState(null);

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
        <MenuItem
          component="a"
          href="/about-me"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page1}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/resume"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page2}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/formation"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page3} & ${information.menu.page4}`}
        </MenuItem>
        <MenuItem
          component="a"
          href="/projects"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page5}`}
        </MenuItem>
        {/*      <MenuItem
          component="a"
          href="/contact"
          className="link"
          onClick={handleClose}
        >
          {`🔹 ${information.menu.page6}`}
        </MenuItem> */}
        <MenuItem className="language">
          {language === 'EN'
            ? (
              <button
                type="button"
                onClick={(() => setLanguage('ES'))}
              >
                ⚙️ ES
              </button>
            )
            : (
              <button
                type="button"
                onClick={(() => setLanguage('EN'))}
              >
                ⚙️ EN
              </button>
            )}
        </MenuItem>
      </Menu>
    </section>
  );
}

MenuMobile.propTypes = {
  information: PropTypes.shape({
    menu: PropTypes.shape({
      page1: PropTypes.string.isRequired,
      page2: PropTypes.string.isRequired,
      page3: PropTypes.string.isRequired,
      page4: PropTypes.string.isRequired,
      page5: PropTypes.string.isRequired,
      page6: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
