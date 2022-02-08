import React from "react";
import "../../css/main.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-12 col-sm-12 text-center">
            {" "}
            Copyright © 2022 GlobStake.
            <a href="#" target="_blank">
              GlobStake Smart Contract
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
