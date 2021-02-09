//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";
import TrafficLight from "./component/Semaphore.js";
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
