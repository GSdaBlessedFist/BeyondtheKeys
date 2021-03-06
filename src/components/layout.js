import React from "react";
import {Link,navigate} from 'gatsby';
import "../scss/global.scss";
import "../scss/layout.scss";

export default function Layout({children }) {

  function home(){
    navigate("/");
  }
  return (
    <div className="layout-container">
      <div className="layout-container_header">
        <div className="layout-container_header--title" onClick={home}>
          BeyondTheKeys(_)
        </div>
      </div>
      <nav className="layout-container_navbar">
          <li><Link to={"/artwork"} className="navLinks">Artwork</Link></li>
          <li><Link to={"/stories"} activeClassName="navLinks">Stories</Link></li>
          <li><Link to={"/about"} activeClassName="navLinks">About</Link></li>
      </nav>
        <div className="layout-container_content ">
          {children}
        </div>

      <div className="layout-container_footer" onClick={home}>
        BeyondTheKeys(_)
      </div>
    </div>
  )
}