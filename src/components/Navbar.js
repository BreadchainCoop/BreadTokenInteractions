import React from "react";
import JazziconComponent from "./JazziconComponent";
import { Outlet, Link } from "react-router-dom";

const contractAddress = "0x365a0c2bcb154c933091e8b6f81b9ef3b4c69b07";

function Navbar({ data }) {
  const diameter = 50;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="text-base sm:text-xl font-bold">Bread Action Page</div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ visibility: "visible" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item nav-item-custom">
            <strong>{(data?.token_balance / 1e18).toFixed(2)} $BREAD</strong>
          </li>
          <li className="nav-item nav-item-custom">
            <strong>{(data?.balance / 1e18).toFixed(2)} MATIC </strong>
          </li>
          <li>
            <div className="acc-holder">
              {data?.selectedAddress.slice(0, 6)}...
              {data?.selectedAddress.slice(-4)}
            </div>
          </li>
          <li>
            <div>
              <JazziconComponent
                ethereumAddress={data?.selectedAddress}
                diameter={diameter}
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
