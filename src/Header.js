import React from "react";
import "./Header.scss";
import ShakasFlying from "./ShakasFlying";

const Header = () => {
  return (
    <div className="Header">
      <div className="background"/>
      <div className="welcome-message-box">
        <h1>Howdy! I'm Elijah Esmero. <br/>I am a full-stack developer.</h1>
      </div>
      <div className="wrap">       
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
        <ShakasFlying width="138pt" height="120pt" colour="black"/>
      </div>
    </div>
  );
};

export default Header;