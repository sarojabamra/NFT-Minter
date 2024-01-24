import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-content">
          <h1>Our Motive</h1>
          <p>
            Imagine a world where artists, photographers, and content creators
            are seeking a seamless way to turn their digital creations into
            unique, verifiable assets, and imagine there is a platform to
            empower these creators with a user-friendly interface that leverages
            blockchain technology. The primary objective is to provide users
            with a hassle-free experience, allowing them to upload images,
            initiate a minting process, and effortlessly receive a non-fungible
            token (NFT) representing their uploaded content
          </p>
          <p className="copyright">© All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default About;
