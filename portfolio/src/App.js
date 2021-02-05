import React from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import SideNavbar from "./SideNavbar";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <SideNavbar />
      <Header />
      <div className="gradient-vertical"/>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
