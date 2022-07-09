// Author(s): Dan, Sam
import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
