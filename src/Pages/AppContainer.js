import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "../Components/NavBar";
import MainComponent from "../Components/MainComponent";
import { get, set } from "../Helpers/Utilities";
import Loader from "../Components/Loader";

export default function AppContainer() {
  const [darkState, setDarkState] = useState(false);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    if (get("darkState") === "true") {
      document.documentElement.className = "theme-dark";
      setDarkState(true);
    }
    // else if (detectPreferedColorScheme === "theme-dark") {
    //   document.documentElement.className = "theme-dark";
    //   setDarkState(true);
    // }
    else {
      document.documentElement.className = "theme-light";
      set("darkState", false);
      setDarkState(false);
    }
    setWaiting(false);
  }, [darkState]); //passing [] as 2nd parameter as we want useEffect to run only once --> used as componentDidMount()

  const toggleDarkState = () => {
    const newTheme = darkState ? "theme-dark" : "theme-light";
    document.documentElement.className = newTheme;
    setDarkState(!darkState);
    set("darkState", !darkState);
  };

  return waiting ? (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <NavBar darkState={darkState} toggleDarkState={toggleDarkState} />
      <MainComponent open={"open"} />
    </div>
  );
}
