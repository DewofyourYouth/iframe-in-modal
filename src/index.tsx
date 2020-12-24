import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "App";
import Form from "components/Form";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/modal-form">
          <Form />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
