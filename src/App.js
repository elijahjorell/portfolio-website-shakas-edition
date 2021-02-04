import React from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import DarkNavbar from "./DarkNavbar";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <DarkNavbar />
      <div className="gradient-vertical"/>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
