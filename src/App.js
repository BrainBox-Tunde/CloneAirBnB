import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home";
import SearchPage from "./Component/SearchPage/SearchPage";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
