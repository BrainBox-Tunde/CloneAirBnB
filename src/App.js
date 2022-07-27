import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home";
import SearchPage from "./Component/SearchPage/SearchPage";
import BeachPage from './Component/NavIconPage/BeachPage';
import NavIcons from "./Component/NavIcons/NavIcons";
// import {Routes} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <NavIcons />

        <Switch>
          {/* <Routes> */}
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/NavIconPage/BeachPage" element = {<BeachPage />} />
          {/* </Routes> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
