import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./widthDraw.css";
const WithDraw = () => {
  return (
    <div>
      <div className="page">
        <div className="page-main">
          {/* <!-- app-content--> */}
          <div className="app-content">
            {/* <!-- HEADER --> */}
            <Header />
            {/* <!-- HEADER END --> <!--Resposnisve Navbar--> */}
            <div className="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-sm-none">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div className="d-flex order-lg-2 ml-auto">
                  <div className="dropdown text-center selector profile-1 mt-4">
                    <a
                      href="logout.html"
                      className="nav-link leading-none d-flex"
                    >
                      <span>
                        <img
                          src="assets/images/logout_icon.png"
                          className="avatar brround cover-image mb-1 ml-0"
                        />
                      </span>
                    </a>
                  </div>
                  {/* <!-- PROFILE --> */}
                </div>
              </div>
            </div>
            {/* <!--/Resposnisve Navbar--> <!-- HORIZONTAL-MENU --> */}
            <div
              id="sticky-wrapper"
              className="sticky-wrapper"
              style={{ height: "57px" }}
            >
              <Navbar />
            </div>
          </div>
        </div>
        {/* <!--------start dashboard---------------> */}

        <div className="side-app container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div className="card shadow">
                <div className="card-header bg-transparent">
                  <h4 className="card-title mb-0">Withdrawal</h4>
                </div>

                <form className="box box-default table-wrapper">
                  <div className="panel-body">
                    <br />
                    <span id="metamaskConnection" style={{ color: "red" }}>
                      Tronlink is not connected..!..Wait...
                    </span>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-md-2">
                        <label>DSP : </label>
                      </div>
                      <div className="col-md-3">
                        <label className="form-control">000</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-2">
                        <label>TSP : </label>
                      </div>
                      <div className="col-md-3">
                        <label className="form-control">000</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-2">
                        <label>Referral Earning : </label>
                      </div>
                      <div className="col-md-3">
                        <label className="form-control">000</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-2">
                        <label>Pool Income : </label>
                      </div>
                      <div className="col-md-3">
                        <label className="form-control">000</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-2" style={{ display: "00" }}>
                        <label>CTO Income : </label>
                      </div>
                      <div className="col-md-3" style={{ display: "00" }}>
                        <label
                          className="form-control"
                          id="CTOAmount"
                          ng-model="p.CTOAmount"
                        >
                          000
                        </label>
                      </div>
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-md-2">
                        <label>Wallet Net Token Value</label>
                      </div>
                      <div className="col-md-3">
                        <label className="form-control" id="walletUSDAmount">
                          000
                        </label>
                      </div>
                    </div>
                    <br />

                    <div className="row">
                      <div className="col-md-2">
                        <label>Enter Token Amount </label>
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          className="form-control mb-20"
                          id="amount"
                          placeholder="Enter Token Amount"
                          maxLength="10"
                        />
                      </div>
                    </div>
                    <br />

                    <input
                      type="hidden"
                      id="address"
                      className="form-control"
                      value="000"
                    />
                    <input
                      type="hidden"
                      id="userid"
                      className="form-control"
                      value="000"
                    />
                    <input
                      type="hidden"
                      id="withdrawalvalidate"
                      className="form-control"
                      value="000"
                    />

                    <div className="row">
                      <div className="col-md-3 col-md-offset-2" id="divsubmit">
                        <button
                          className="btn1 btn1-success"
                          type="button"
                          style={{ marginTop: "10px" }}
                          id="btnother"
                        >
                          Withdrawal
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WithDraw;
