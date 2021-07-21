import React, { useEffect, useState, useReducer } from "react";
import { CssBaseline } from "@material-ui/core";
import NavBar from "../Components/NavBar";
import MainComponent from "../Components/MainComponent";
import { get, set } from "../Helpers/Utilities";
import Loader from "../Components/Loader";

export default function AppContainer() {
  const [darkState, toggleDarkState] = useReducer(state => !state, get("darkState"));
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    darkState === null || darkState === true ? setDarkState(true) : setDarkState(false)
    setWaiting(false);
  },[])

  const setDarkState = (newDarkState) => {
    document.documentElement.className = newDarkState ? "theme-dark" : "theme-light";
    set("darkState", newDarkState);
    toggleDarkState()
  }
  const switchDarkState = () => {
    setWaiting(true);
    setDarkState(!darkState)
    setWaiting(false);
  };

  return waiting ? (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <NavBar darkState={darkState} toggleDarkState={switchDarkState} />
      <MainComponent open={"open"} />
    </div>
  );
}
