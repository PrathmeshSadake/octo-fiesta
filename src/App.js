import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Testimonials from "./pages/Testimonials";
import Destinations from "./pages/Destinations";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/destinations">
          <Destinations />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/testimonials">
          <Testimonials />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
