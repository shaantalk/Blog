import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
// Icons
import {
  HomeRounded as HomeIcon,
  Brightness3Rounded as DarkIcon,
  Brightness7Rounded as LightIcon,
  ListRounded as ListIcon,
} from "@material-ui/icons";

import "../Styles/NavBar.css";

export default function NavBar(props) {
  let { darkState, toggleDarkState } = props;

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          className='iconButtons'
          component={Link}
          to='/'
          edge='start'
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          className='iconButtons'
          component={Link}
          to='/blogs'
          edge='start'
        >
          <ListIcon />
        </IconButton>
        <IconButton
          style={{ margin: "0.5rem 0.5rem 0.5rem auto" }}
          edge={false}
          color='inherit'
          aria-label='mode'
          onClick={() => toggleDarkState()}
        >
          {darkState ? <LightIcon /> : <DarkIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
