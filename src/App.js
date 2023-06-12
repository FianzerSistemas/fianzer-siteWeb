import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages
import home from "./pages/home/AppStyle";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={home}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
