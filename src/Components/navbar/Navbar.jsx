import React from "react";
import ethereum from "../../images/Ethereum.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "../../utils/interact";

const Navbar = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={ethereum} alt="ethereum" className="ethereum" />
        <div className="logo-text">
          <p>NFTMinter</p>
        </div>
      </div>
      <div className="nav">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/mint">
          <p>Mint</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <div className="btn">
          <button
            id="walletButton"
            className="outline-btn"
            onClick={connectWalletPressed}
          >
            {walletAddress.length > 0 ? (
              "Connected: " +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span>Connect Wallet</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
