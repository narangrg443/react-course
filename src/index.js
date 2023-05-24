import React from "react";
import ReactDOM from "react-dom";
import profiles from "./components/contact";
import App from "./components/app"


const login = true;

ReactDOM.render(
  <div>
    <App login={login} />
  </div>,
  document.getElementById('root')
);