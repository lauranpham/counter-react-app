import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import registerServiceWorker from ".registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

// const element = <h1>Hello World</h1>;
// Index will render App Component
ReactDOM.render(<Counters />, document.getElementById("root"));
