import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  const { children } = props;

  return (
    <div className="main-container">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
