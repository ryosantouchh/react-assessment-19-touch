import React from "react";
import Layout from "./Layout";
import profile from "./assets/touch-profile-pic.png";

function Owner() {
  return (
    <Layout>
      <div className="owner-container">
        <h1>Touch - Group C - 19</h1>
        <img src={profile} alt="" width="300" />
        <h3>Short Biography</h3>
        <p>
          I'm <em>one of many smurfs</em> (called by someone you guys know) in
          JSD4 Bootcamp at Generation Thailand who have "
          <span className="white-belt-span">White Belt Mentality</span>". Coding
          give me new experiences and excitement, so I decided to start my new
          journey as a software developer.
        </p>
      </div>
    </Layout>
  );
}

export default Owner;
