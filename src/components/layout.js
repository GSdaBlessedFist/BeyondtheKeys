import React from "react";
import {Link} from 'gatsby';
import "../scss/global.scss";
import "../scss/layout.scss";

export default function Layout({children }) {
  return (
    <div className="layout-container">
      <div className="layout-container_header">
        <div className="layout-container_header--title">BeyondTheKeys(_)</div>
      </div>
      <nav className="layout-container_navbar">
          <li><Link to={"/artwork"} activeClassName="navLinks">Artwork</Link></li>
          <li><Link to={"/stories/"} activeClassName="navLinks">Stories</Link></li>
          <li><Link to={"/about"} activeClassName="navLinks">About</Link></li>
      </nav>
        <div className="layout-container_content">
          {children}
        </div>

      <div className="layout-container_footer"></div>
    </div>
  )
}