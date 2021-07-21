import React from "react";
import { CssBaseline } from "@material-ui/core";
import MainComponent from "../Components/MainComponent";

export default function AppContainer() {
  return (<div style={{ display: "flex" }}>
      <CssBaseline />
      <MainComponent/>
    </div>
  );
}
