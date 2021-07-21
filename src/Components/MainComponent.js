import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import HomePage from "../Pages/HomePage";
import Projects from "../Pages/Projects";
import Page404 from "../Pages/Page404";

const userStyles = makeStyles(theme => ({
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
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route component={Page404} />
      </Switch>
    </main>
  );
}
