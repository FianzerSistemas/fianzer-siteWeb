import React from "react";
import logoWhite from "../assets/images/logo-white.png";
import logoBlack from "../assets/images/logo-black.png";
import Icofont from "react-icofont";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className={"navbar-toggle " + (collapse ? "collapsed" : "")}
        data-toggle="dropdown"
        data-target="#navbar-menu"
        onClick={showMenu}>
        <Icofont icon="navigation-menu" />
      </button>
      <div className="logo">
        <a href="#home">
          <img
            className="logo logo-display hidden"
            src={logoBlack}
            alt=""
          />
          <img
            className="logo logo-scrolled"
            src={logoWhite}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
