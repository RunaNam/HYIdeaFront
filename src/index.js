import React from "react";
import ReactDOM from "react-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
