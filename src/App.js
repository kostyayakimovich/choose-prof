import React from 'react';
import Info from "./components/Info";
import Header from "./components/Header";
import Accounting from "./components/Accounting";
import Statistic from "./components/Statistic";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
function App() {
  return (

    <main className="wrap">
      <Router>
        <Header />
        <Switch>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Route path="/accounting">
            <Accounting />
          </Route>
          <Route path="/" >
            <Info />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </main>

  );
}

export default App;
