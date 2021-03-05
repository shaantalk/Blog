import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
// import { HomePage } from "../Pages/HomePage";
import HomePage from "../Pages/HomePage";
import Projects from "../Pages/Projects";
import Blogs from "../Pages/Blogs";
import MarkdownRenderer from "../Components/MardownRenderer";
import Page404 from "../Pages/Page404";

const userStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    marginLeft: 0,
    width: "100vw",
  },
}));

export default function MainComponent() {
  const classes = userStyles();
  return (
    <main className={classes.content}>
      <div className={classes.drawerHeader} />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/blogs'>
          <Blogs />
        </Route>
        <Route
          exact
          path='/blog/:id'
          render={props => <MarkdownRenderer {...props} />}
        />
        <Route component={Page404} />
      </Switch>
    </main>
  );
}
