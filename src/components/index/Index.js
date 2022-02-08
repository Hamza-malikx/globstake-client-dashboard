import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./index.css";
import graph from "../../assets/images/graph.PNG";
import chartBar from "../../assets/images/chart bar.PNG";
import cube from "../../assets/images/cube.PNG";
import pie from "../../assets/images/pie.PNG";
import coter from "../../assets/images/redscoter.png";
import laurus from "../../assets/images/laurus-icon.png";
import active from "../../assets/images/active.png";
import idred from "../../assets/images/idred.png";
const Index = () => {
  const [sum, setSum] = useState(0);
  const add = (num) => {
    setSum(sum + num);
  };
  const reset = () => {
    setSum(0);
  };
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
                    <Link to="/logout" className="nav-link leading-none d-flex">
                      <span>
                        <img
                          src="assets/images/logout_icon.png"
                          className="avatar brround cover-image mb-1 ml-0"
                        />
                      </span>
                    </Link>
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
          {/* <!-- PAGE-HEADER --> */}
          <div className="page-header">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">User</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
            <div>
              <a
                href="#"
                className="btn btn-sm btn-primary"
                style={{ fontSize: "16px" }}
              >
                <img src={idred} height="25px" width="25px" />
                &nbsp; Member ID:
                <span style={{ color: "white" }}>100</span>
              </a>
            </div>
          </div>

          <div className="row row-cards">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="form-label">Affiliate Link:</div>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="myInput1"
                            readOnly=""
                            defaultValue="gdhdhhhhhhh"
                          />
                          <span className="input-group-append">
                            {" "}
                            <button
                              className="btn btn-primary-light"
                              type="button"
                              // onClick="myFunction1()"
                            >
                              Copy
                            </button>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="form-label">Wallet Address:</div>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="myInput2"
                            readOnly=""
                            defaultValue="fdsgdgdg"
                          />
                          <span className="input-group-append">
                            {" "}
                            <button
                              className="btn btn-primary-light"
                              type="button"
                              // onClick="myFunction2()"
                            >
                              <span
                              // onClick="myFunction()"
                              >
                                Copy
                              </span>
                            </button>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ROW-1 OPEN --> */}
          <div className="row">
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <Link to="/Downline">
                    <div className="card-widget">
                      <h6 className="mb-2">My Team</h6>
                      <h2 className="text-left">
                        <span>000</span>
                        {/* <i className="ion-arrow-graph-up-right icon-size text-warning-1 float-right"></i> */}
                        <img
                          src={graph}
                          alt=""
                          style={{
                            height: "32px",
                            width: "40px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-warning-1 w-60"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card">
                <div className="card-body ">
                  <Link to="/my-referral">
                    <h5 className=""> My Referral</h5>
                    <h2 className="text-left">
                      <span>000</span>
                      <i className="fa fa-users icon-size text-danger-1 float-right"></i>
                    </h2>
                    <div className="progress progress-sm mt-0 mb-2">
                      <div
                        className="progress-bar bg-danger-1 w-45"
                        role="progressbar"
                      ></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card">
                <div className="card-body ">
                  <Link to="/daily-roi">
                    <h5 className=""> DSP</h5>
                    <h2 className="text-left">
                      <span>000</span>
                      <img
                        src={chartBar}
                        alt=""
                        style={{
                          height: "30px",
                          width: "30px",
                          float: "right",
                        }}
                      />
                    </h2>
                    <div className="progress progress-sm mt-0 mb-2">
                      <div
                        className="progress-bar bg-primary-1 w-75"
                        role="progressbar"
                      ></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <Link to="/teamEE">
                    <div className="card-widget">
                      <h6 className="mb-2">TSP</h6>
                      <h2 className="text-left">
                        <span>000</span>
                        <img
                          src={cube}
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-secondary-1 w-45"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-widget">
                    <Link to="/referral-income">
                      <h6 className="mb-2">Referral Earning</h6>
                      <h2 className="text-left">
                        <span>000</span>
                        <img
                          src={pie}
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-success-1 w-30"
                          role="progressbar"
                        ></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card">
                <div className="card-body ">
                  <Link to="/daily-nft">
                    <h5 className=""> Pool Income</h5>
                    <h2 className="text-left">
                      <span>000</span>
                      <i className="fa fa-users icon-size text-danger-1 float-right"></i>
                    </h2>
                    <div className="progress progress-sm mt-0 mb-2">
                      <div
                        className="progress-bar bg-danger-1 w-45"
                        role="progressbar"
                      ></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <div className="card-widget">
                    <h6 className="mb-2">Total Earning</h6>
                    <h2 className="text-left">
                      <span>0000</span>
                      <i className="fa fa-money-bill icon-size text-purple float-right"></i>
                    </h2>
                    <div className="progress progress-sm mt-0 mb-2">
                      <div
                        className="progress-bar bg-purple w-20"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-widget">
                    <Link to="/withdraw-history">
                      <h6 className="mb-2"> Withdrawal</h6>
                      <h2 className="text-left">
                        <span>000</span>
                        <i className="fa fa-address-card icon-size text-orange float-right"></i>
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-orange w-60"
                          role="progressbar"
                        ></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END -->
                <!-- COL END --> */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <a href="#">
                    <div className="card-widget">
                      <h6 className="mb-2">Net Blanace </h6>
                      <h2 className="text-left">
                        <span>000</span>
                        <img
                          src={graph}
                          alt=""
                          style={{
                            height: "32px",
                            width: "40px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-warning-1 w-60"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <a href="#">
                    <div className="card-widget">
                      <h6 className="mb-2">My Staking</h6>
                      <h2 className="text-left">
                        <span>0000</span>
                        <img
                          src={cube}
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-secondary-1 w-45"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <a href="#">
                    <div className="card-widget">
                      <h6 className="mb-2">Team Staking</h6>
                      <h2 className="text-left">
                        <span>000</span>
                        <img
                          src={cube}
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-secondary-1 w-45"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
              <div className="card ">
                <div className="card-body">
                  <a href="#">
                    <div className="card-widget">
                      <h6 className="mb-2">Pool Qualify</h6>
                      <h2 className="text-left">
                        <span>Not Qualify</span>

                        <img
                          src={cube}
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            float: "right",
                          }}
                        />
                      </h2>
                      <div className="progress progress-sm mt-0 mb-2">
                        <div
                          className="progress-bar bg-success-1 w-30"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix">
            <br />
          </div>

          <div className="row row-deck" style={{ marginTop: "15px" }}>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="col-md-12">
                <div className="prgs">
                  <img src={coter} id="dynamicwidth" />

                  <div id="myProgress">
                    <div id="myBar"></div>
                  </div>
                </div>
                <div className="text_color" style={{ fontSize: "medium" }}>
                  Total earned dgdg out of 300% gdgd of total staking.
                </div>

                {/* <style>
                            .text_color {
                                color: #fff;
                                
                                font-size: 18px;
                            }

                            #myProgress {
                                width: 100%;
                                background-color: lightblue;
                            }

                            #myBar {
                                width: 1%;
                                height: 20px;
                            }
                        </style> */}
                {/* <script>
                            $(document).ready(function () {
                                move();
                            });
                            var i = 0;
                            function move() {
                                if (i == 0) {
                                    i = 1;
                                    //
                                    var elem = document.getElementById("myBar");
                                    var dynamicwdth = document.getElementById("dynamicwidth");
                                    var width =@Session["MaxIncome"]  ;
                                    elem.style.width = width + "%";
                                    dynamicwdth.style.marginLeft=width + "%";
                                    if (width > 90) {
                                        elem.style.backgroundColor = "red";
                                    }
                                    else {
                                        elem.style.backgroundColor = "green";
                                    }
                                    
                                }
                            }

                        </script> */}
              </div>
            </div>
          </div>

          <div className="clearfix">
            <br />
          </div>

          {/* <!-- ROW-1 CLOSED --> <!-- ROW-2 OPEN --> */}
          <div className="row row-deck">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="card overflow-hidden">
                <div className="card-body text-center overflow-hidden">
                  <div className="mb-4">
                    <h5 className="card-title fs-40">Total Team</h5>
                  </div>
                  <h2 className="mb-1 font-rubik fs-40">000</h2>

                  <div className="chart-wrapper">
                    <div
                      className="chartjs-size-monitor"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        overflow: "hidden",
                        pointerEvents: "none",
                        visibility: "hidden",
                        zIndex: "-1",
                      }}
                    >
                      <div
                        className="chartjs-size-mnitor-expand"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: "-1",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "1000000px",
                            height: "1000000px",
                            left: 0,
                            top: 0,
                          }}
                        ></div>
                      </div>
                      <div
                        className="chartjs-size-monitor-shrink"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          overflow: "hidden",
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            width: "200%",
                            height: "200%",
                            left: 0,
                            top: 0,
                          }}
                        ></div>
                      </div>
                    </div>
                    <canvas
                      id="expense"
                      className="chart-dropshadow2 overflow-hidden chartjs-render-monitor"
                      height="250"
                      style={{
                        display: "block",
                        width: "334px",
                        height: "250px",
                      }}
                      width="334"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="card overflow-hidden">
                <div className="card-header">
                  <h3 className="card-title">Team</h3>
                </div>

                <div className="card-body">
                  <div className="">
                    <p className="mb-0">My Downline</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                        <div className="progress-bar bg-primary-1 w-80"></div>
                      </div>
                      <p className="text-muted mt-1 mb-0">000</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mb-0">Active Downline</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                        <div className="progress-bar bg-secondary-1 w-50"></div>
                      </div>
                      <p className="text-muted mt-1 mb-0">000</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className=" mb-0">My Direct </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                        <div className="progress-bar bg-danger-1 w-65"></div>
                      </div>
                      <p className="text-muted mt-1 mb-0">000</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className=" mb-0">Active Direct</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                        <div className="progress-bar bg-success w-30"></div>
                      </div>
                      <p className="text-muted mt-1 mb-0">000</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className=" mb-0">Total Earning</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                        <div className="progress-bar bg-warning-1 w-40"></div>
                      </div>
                      <p className="text-muted mt-1 mb-0">000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ROW-2 CLOSED --> <!-- ROW-3 OPEN --> */}
          <div className="row row-deck">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="card overflow-hidden">
                <div className="card-header">
                  <h3 className="card-title">Earning</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 text-center">
                      <div
                        id="donut"
                        className="h-220 chart-dropshadow2"
                        data-highcharts-chart="0"
                      >
                        <div
                          id="highcharts-j2i0xxp-0"
                          dir="ltr"
                          className="highcharts-container "
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: "308px",
                            height: "220px",
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            //  -webkit-tap-highlight-color: "rgba(0, 0, 0, 0)"
                          }}
                        >
                          <svg
                            version="1.1"
                            className="highcharts-root"
                            style={{
                              fontFamily: `"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif`,
                              fontSize: "12px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="308"
                            height="220"
                            viewBox="0 0 308 220"
                          >
                            <desc>Created with Highcharts 6.1.3</desc>
                            <defs>
                              <clipPath id="highcharts-j2i0xxp-1">
                                <rect
                                  x="0"
                                  y="0"
                                  width="288"
                                  height="195"
                                  fill="none"
                                ></rect>
                              </clipPath>
                              <radialGradient
                                cx="164"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-2"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="164"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-3"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="164"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-4"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="164"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-5"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="164"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-6"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="144"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-11"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(163, 67, 255 ,0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="144"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-12"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(255, 235, 59, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="144"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-13"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(249, 90, 90, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="144"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-14"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(0, 179, 255,0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                              <radialGradient
                                cx="144"
                                cy="97.5"
                                r="166.5"
                                gradientUnits="userSpaceOnUse"
                                id="highcharts-j2i0xxp-15"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.4"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="0.6"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                                <stop
                                  offset="1"
                                  stopColor="rgb(48, 193, 2, 0.9)"
                                  stopOpacity="1"
                                ></stop>
                              </radialGradient>
                            </defs>
                            <rect
                              fill="transparent"
                              className="highcharts-background"
                              x="0"
                              y="0"
                              width="308"
                              height="220"
                              rx="0"
                              ry="0"
                            ></rect>
                            <rect
                              fill="none"
                              className="highcharts-plot-background"
                              x="10"
                              y="10"
                              width="288"
                              height="195"
                            ></rect>
                            <circle
                              cx="50%"
                              cy="50%"
                              r="102"
                              fill="transparent"
                            ></circle>
                            <rect
                              fill="none"
                              className="highcharts-plot-border"
                              data-z-index="1"
                              x="10"
                              y="10"
                              width="288"
                              height="195"
                            ></rect>
                            <g
                              className="highcharts-series-group"
                              data-z-index="3"
                            >
                              <g
                                data-z-index="0.1"
                                className="highcharts-series highcharts-series-0 highcharts-pie-series  highcharts-tracker"
                                transform="translate(10,10) scale(1 1)"
                                style={{ cursor: "pointer" }}
                              >
                                <path
                                  fill="url(#highcharts-j2i0xxp-2)"
                                  d="M 143.98116022865818 5.000001918578306 A 92.5 92.5 0 0 1 230.13954325574372 131.2079973847729 L 204.2976802790206 121.09559816934103 A 64.75 64.75 0 0 0 143.98681216006074 32.750001343004826 Z"
                                  transform="translate(0,0)"
                                  stroke="rgba(255,255,255,.5)"
                                  strokeWidth="0.5"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-0"
                                ></path>
                                <path
                                  fill="url(#highcharts-j2i0xxp-3)"
                                  d="M 230.1057921942089 131.29412005967478 A 92.5 92.5 0 0 1 146.5708291462523 189.96426789577032 L 145.79958040237662 162.22498752703922 A 64.75 64.75 0 0 0 204.27405453594622 121.15588404177234 Z"
                                  transform="translate(0,0)"
                                  stroke="rgba(255,255,255,.5)"
                                  strokeWidth="0.5"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-1"
                                ></path>
                                <path
                                  fill="url(#highcharts-j2i0xxp-4)"
                                  d="M 146.47836360835277 189.966792492358 A 92.5 92.5 0 0 1 55.06648415247902 122.93776246053757 L 81.74653890673531 115.3064337223763 A 64.75 64.75 0 0 0 145.73485452584694 162.22675474465058 Z"
                                  transform="translate(0,0)"
                                  stroke="rgba(255,255,255,.5)"
                                  strokeWidth="0.5"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-2"
                                ></path>
                                <path
                                  fill="url(#highcharts-j2i0xxp-5)"
                                  d="M 55.041090861012336 122.84881624063213 A 92.5 92.5 0 0 1 67.73003609961646 45.16318115672113 L 90.61102526973151 60.864226809704796 A 64.75 64.75 0 0 0 81.72876360270863 115.2441713684425 Z"
                                  transform="translate(0,0)"
                                  stroke="rgba(255,255,255,.5)"
                                  strokeWidth="0.5"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-3"
                                ></path>
                                <path
                                  fill="url(#highcharts-j2i0xxp-6)"
                                  d="M 67.78241104471569 45.086937373939655 A 92.5 92.5 0 0 1 143.87151935572837 5.000089228561691 L 143.91006354900986 32.75006245999319 A 64.75 64.75 0 0 0 90.64768773130098 60.81085616175776 Z"
                                  transform="translate(0,0)"
                                  stroke="rgba(255,255,255,.5)"
                                  strokeWidth="0.5"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-4"
                                ></path>
                              </g>
                              <g
                                data-z-index="0.1"
                                className="highcharts-markers highcharts-series-0 highcharts-pie-series "
                                transform="translate(10,10) scale(1 1)"
                              ></g>
                            </g>
                            <text
                              x="154"
                              textAnchor="middle"
                              className="highcharts-title"
                              data-z-index="4"
                              style={{
                                color: "#fff",
                                fontSize: "18px",
                                fill: "#fff",
                              }}
                              y="24"
                            ></text>
                            <text
                              x="154"
                              textAnchor="middle"
                              className="highcharts-subtitle"
                              data-z-index="4"
                              style={{ color: "#666666", fill: "#666666" }}
                              y="24"
                            ></text>
                            <g className="highcharts-legend" data-z-index="7">
                              <rect
                                fill="none"
                                className="highcharts-legend-box"
                                rx="0"
                                ry="0"
                                x="0"
                                y="0"
                                width="8"
                                height="8"
                                visibility="hidden"
                              ></rect>
                              <g data-z-index="1">
                                <g></g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <h2 className="mb-2 font-rubik fs-40">000</h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 mt-4 mt-sm-0">
                      <div className="">
                        <p className="mb-0">DSP</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                            <div className="progress-bar bg-primary-1 w-80"></div>
                          </div>
                          <p className="text-muted mt-1 mb-0">000</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="mb-0">TSP</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                            <div className="progress-bar bg-secondary-1 w-50"></div>
                          </div>
                          <p className="text-muted mt-1 mb-0">00</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className=" mb-0">Referral Earning </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                            <div className="progress-bar bg-danger-1 w-65"></div>
                          </div>
                          <p className="text-muted mt-1 mb-0">000</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className=" mb-0">Pool Earning</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress h-3 w-100 mt-1 flex-grow-1 mr-4">
                            <div className="progress-bar bg-success w-30"></div>
                          </div>
                          <p className="text-muted mt-1 mb-0">000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-6">
              <div className="card shadow">
                <div className="card-header bg-transparent">
                  <h4 className="card-title mb-0">Latest News </h4>
                </div>
                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="card-body">
                      <marquee
                        width="100%"
                        direction="up"
                        height="235px;"
                        scrollamount="3"
                      >
                        <p>Welcome to Globstake</p>
                      </marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
          </div>

          {/* <!-- ROW-2 CLOSED --> <!-- ROW-3 OPEN --> */}
          <div className="row row-deck">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-6">
              <div className="card shadow">
                <div className="card-header bg-transparent">
                  <h3 className="card-title">
                    Available Laurus Balance :{" "}
                    <span id="tokenbalance">Get Balance</span>
                  </h3>
                </div>
                <div className="card-body p-0">
                  <div className="space_set"></div>
                  <div className="grid-margin">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-6">
                          <p id="exampleModal3Label1">1 USD / 1 LSCN</p>
                        </div>
                        <div className="col-xl-6">
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            name="input"
                            placeholder="1 USD 0000 LSCN"
                          />
                        </div>
                      </div>
                      <br />

                      {/* <!---onClick number increase start--> */}
                      <div className="addNum">
                        <div className="trxnumber">
                          <input
                            type="text"
                            value={sum}
                            readOnly
                            id="txtamount2"
                            className="form5"
                            placeholder="Enter Package Amount"
                          />
                          <span>USD</span>
                        </div>
                        <br />
                        <div className="trxnumber">
                          <input
                            type="text"
                            readOnly
                            value={sum > 0 ? 0 : ""}
                            id="txtTokenvalue2"
                            className="form5"
                            placeholder="Calculated Token Value"
                          />
                          <span>Laurus</span>
                        </div>
                        <br />
                        <div className="trxnumber">
                          <input
                            type="text"
                            readOnly
                            value={sum > 0 ? 0 : ""}
                            id="txtTronvalue2"
                            className="form5"
                            placeholder="Calculated Tron Value"
                          />
                          <span>TRON Value</span>
                        </div>

                        <div className="numbtn">
                          <button
                            onClick={() => {
                              add(100);
                            }}
                            className="btn btn-primary"
                          >
                            + 100 USD
                          </button>
                          <button
                            onClick={() => {
                              add(500);
                            }}
                            className="btn btn-primary"
                          >
                            + 500 USD
                          </button>
                          <button
                            onClick={() => {
                              add(1000);
                            }}
                            className="btn btn-primary"
                          >
                            + 1000 USD
                          </button>
                          <button
                            onClick={() => {
                              add(5000);
                            }}
                            className="btn btn-primary"
                          >
                            + 5000 USD
                          </button>
                          <button
                            onClick={() => {
                              add(10000);
                            }}
                            className="btn btn-primary"
                          >
                            + 10000 USD
                          </button>
                          <button
                            onClick={() => {
                              add(25000);
                            }}
                            className="btn btn-primary"
                          >
                            + 25000 USD
                          </button>

                          <button className="btn btn-primary" onClick={reset}>
                            Reset
                          </button>
                        </div>
                      </div>

                      <div className="row select_network">
                        <div className="col-md-6">
                          <a href="">
                            <div
                              className="text-center net_box"
                              style={{ marginBottom: "10px" }}
                            >
                              <img src={laurus} className="img-fluid" />
                              <h4>Laurus</h4>
                            </div>
                          </a>
                        </div>

                        <div className="col-md-6">
                          <a href="#">
                            <div className="text-center net_box">
                              <img src={active} className="img-fluid" />
                              <h4 style={{ color: "#fff" }}>
                                Activate Package
                              </h4>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
          </div>
          {/* <!-- ROW-3 CLOSED --> <!-- ROW-3 OPEN --> */}
        </div>
        {/* <!--------End dashboard---------------> */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
