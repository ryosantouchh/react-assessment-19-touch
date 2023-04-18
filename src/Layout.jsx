import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
