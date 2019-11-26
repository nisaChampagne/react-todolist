import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//auth
import { Auth0Provider } from "./auth0-wrapper";
import config from "./auth0_config.json";

import { BrowserRouter as Router } from 'react-router-dom';

export let redirectUri = window.location.origin;
// let baseName = "/";
// if (process.env.NODE_ENV === "production") {
//   redirectUri = `${window.location.origin}/${process.env.REACT_APP_STAGE}/`;
//   baseName = `/${process.env.REACT_APP_STAGE}/`;
// }

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={redirectUri}
    onRedirectCallback={onRedirectCallback}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
