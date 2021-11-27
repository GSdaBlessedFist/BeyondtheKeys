import React from "react";
import "../scss/global.scss";
import "../scss/layout.scss";

export default function Layout({title, children }) {
  return (
    <div className="layout-container">
      <div className="layout-container_header">
        <div className="layout-container_header--title">{title}</div>
      </div>
        <div style={{height: "calc(100% - 100px)"}}>
          {children}
        </div>
      <div className="layout-container_footer"></div>
    </div>
  )
}