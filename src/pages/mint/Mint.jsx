import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import { useEffect, useState } from "react";
import "./Mint.css";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "../../utils/interact";

const Mint = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

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
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
  };
  return (
    <>
      <Navbar />
      <div className="mint">
        <div className="mint-content">
          <div className="box">
            <div className="box-content">
              <h1>NFT Minter</h1>
              <p className="instructions">
                Simply add the link to your asset, name and description and
                click on the “Mint” button.
              </p>
              <button
                id="walletButton"
                className="outline-btn box-btn"
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
              <form>
                <p>Link to your asset:</p>
                <input
                  type="text"
                  placeholder="Add the IPFS link to your asset"
                  onChange={(event) => setURL(event.target.value)}
                />
                <p>Name:</p>
                <input
                  type="text"
                  placeholder="Give a name to your asset"
                  onChange={(event) => setName(event.target.value)}
                />
                <p>Description:</p>
                <input
                  type="text"
                  placeholder="Give a description to your asset"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </form>

              <button
                id="mintButton"
                className="mint-btn"
                onClick={onMintPressed}
              >
                <div className="btn-content">
                  <p>Mint</p>
                  <p>&gt;</p>
                </div>
              </button>
              <div className="status-div">
                <p id="status">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
