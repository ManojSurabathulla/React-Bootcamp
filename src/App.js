import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Headingone from "./components/Headingone";
import Para from "./components/Para";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="React">
        <Header />
        <Headingone />
        <Para />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
