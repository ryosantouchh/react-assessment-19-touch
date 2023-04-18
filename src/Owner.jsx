import React from "react";
import Layout from "./Layout";
import profile from "./assets/touch-profile-pic.png";

function Owner() {
  return (
    <Layout>
      <div>
        <h1>Touch - Group C - 19</h1>
        <img src={profile} alt="" width="300" />
        <h3>Short Biography</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
          dolorem facere accusantium laboriosam ipsum illum error nisi tempora
          autem.
        </p>
      </div>
    </Layout>
  );
}

export default Owner;
