import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./Home.css";
import line from "./../../images/Line 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="bg">
        <Navbar />
        <div className="home">
          <div className="content">
            <img src={line} alt="line" />
            <div className="title">
              <h1 className="title1">UPLOAD IMAGE.</h1>
              <h1 className="title2">GET TOKEN.</h1>
            </div>
            <p className="text">
              Welcome! Our user-friendly interface will seamlessly transform
              your digital creations into unique non-fungible tokens, allowing
              the user to showcase and trade their work securely on the
              blockchain.
            </p>
            <div className="btn">
              <Link to="/mint">
                <button className="mint-btn">
                  <div className="btn-content">
                    <p>Start Minting</p>
                    <p>&gt;</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
