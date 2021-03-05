import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Divider,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

const drawerWidth = 250;

const userStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function SideMenu(props) {
  let { open, handleDrawerClose } = props;
  const classes = userStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List component='nav'>
        <ListItem button component={Link} to={`/`} color='inherit'>
          <ListItemText primary='Home Page' />
        </ListItem>
        <ListItem button component={Link} to={`/projects`} color='inherit'>
          <ListItemText primary='Projects Page' />
        </ListItem>
        <ListItem button component={Link} to={`/blogs`} color='inherit'>
          <ListItemText primary='Blogs Page' />
        </ListItem>
      </List>
    </Drawer>
  );
}
