import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./myteam.css";
const MyTeam = () => {
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
                  <h4 className="card-title mb-0">My Team</h4>
                </div>

                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div
                        className="table-responsive"
                        style={{ maxHeight: "500px", overflow: "scroll" }}
                      >
                        Total Downline Investment:- 38700.00
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead className="thead-light">
                            <tr>
                              <th>Sr.No</th>
                              <th> ID</th>
                              <th>Wallet</th>
                              <th>Date and Time</th>
                              <th>Remark</th>
                              <th>Activation Date Time</th>
                              <th>Investment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>998995</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="h#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TU4AjcFyw4SHvM1gfyRuZY3UrTFe1WRW3E8y1
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/20/2022 6:35:59 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/20/2022 6:59:41 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>998960</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TYAZBvRmChnPvLfddyusJ3ZpXa3Hs9H2Ad1a6D
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/26/2022 9:27:11 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/27/2022 5:33:21 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>998259</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TX4j44bWgL98koihyrBSHQ1aMmNKPKdCfFjP66
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/25/2022 10:09:12 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>997965</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TTSpBFbUTEUtNemidtsvhHgChx2T4zp8eaujdW3
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/15/2022 11:52:34 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/15/2022 11:55:41 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>997590</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TF9x8spTbUxUdsTvXEih5afufdybiKuekJYPxK8Rz
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/25/2022 11:46:28 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>997558</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TCUEByDzDk3pgwrgjfydufzYPTuDHxEtHJvfvBQk1
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/18/2022 8:58:48 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>996759</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TYi1fHuVujRHgdgdtiEh82dgzzjxAwttNbwdcx2
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/2/2021 6:59:42 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/3/2021 12:59:00 AM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>995958</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TFLK4azDqfhfyfv5R3PMirPkrEfTPSggZpt5w7Lc
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/24/2022 8:08:33 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>995920</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="h@"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TVkc2X3bNqWR8M4LuouikhzjVS4oh2ZT1qL1sVRm
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>11/26/2021 8:20:27 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/18/2022 12:38:01 AM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>995887</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TBWhvCVL5F9GZ2ZR6fNugsddtctBdkBnymUGjXhjo
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/27/2022 7:46:02 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>995453</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TK4R6tDPDG2ysseaftcfcSrfNieixdoWUuapsZPAf
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>11/30/2021 9:15:03 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/3/2021 2:01:20 AM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>12</td>
                              <td>993439</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TRX8ft557HHjsfsfggtnvrGWBz1hmdqmrfv8efRhk
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/14/2021 2:47:35 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td>992180</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TVRKsqMNYuQeufeadegpSRLo7NGgyevY5vgNvod
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/1/2021 1:59:05 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>14</td>
                              <td>991799</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TB6wSh1gdhfrsehVDTKUE4QXveomt2c6ym2o6u
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/20/2022 11:47:03 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/21/2022 12:03:02 AM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>989693</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TYwwwqdKwvPMTLXFjsfsrQCK99AGhY1XMrdJtG
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/5/2021 11:26:12 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/5/2021 11:34:21 AM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>16</td>
                              <td>989434</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TUeTtTwkujZHmfsrsdfQbzwjfG5Zx2xFeBTGXo
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/22/2021 3:28:50 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/22/2021 3:33:01 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>17</td>
                              <td>988282</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TGPw4addNYwXMCMtvsrrrtfhysrwfGfx7VLEU9hgivVfTu
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/5/2021 11:20:05 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/5/2021 11:25:01 AM</td>
                              <td>200.00</td>
                            </tr>
                            <tr>
                              <td>18</td>
                              <td>987844</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TS2FMWXUkmSxsrrv4rw2s3dTxAWJRfWeQzsJKdgBhwKnt
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/27/2022 1:35:16 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/27/2022 1:59:01 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>19</td>
                              <td>985836</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TXYNZacXJ6Hesfgd5535fsfeRzrLfZuv5Vc9rQLU7zPMg
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/11/2021 9:31:48 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/11/2021 10:12:20 AM</td>
                              <td>10000.00</td>
                            </tr>
                            <tr>
                              <td>20</td>
                              <td>985199</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TTJBnc7zADg2fsfsfsgt5683Rauohp6hZjaptXhydFNMzr
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/10/2021 1:26:17 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/10/2021 1:41:20 AM</td>
                              <td>1000.00</td>
                            </tr>
                            <tr>
                              <td>21</td>
                              <td>984667</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TVmTWHKz1WVWigdtd521P8qw85RFJ4DHv8RVVFg1F
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/1/2021 10:53:53 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>22</td>
                              <td>984589</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TKdYEQX3ZGvsrade34dgdC7KHTTDySF2AATsMYDJGvo9
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/18/2022 4:20:08 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/18/2022 4:23:41 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>23</td>
                              <td>984562</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TEQSwgDNyCDXgths4wtvxEdEVUxXwaH5sG9FtF1
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/14/2022 3:00:15 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/14/2022 3:32:21 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>24</td>
                              <td>982970</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TQ3K2a4TdK61YjRfwedc6qdH5MyV3JQwVbsiRe6T
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>11/26/2021 8:52:42 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>12/1/2021 4:00:41 PM</td>
                              <td>1200.00</td>
                            </tr>
                            <tr>
                              <td>25</td>
                              <td>982865</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TP8zEeijQi5Cofsazcz43BTW7FnWdg4ngRcbYaTuGT
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/14/2022 3:30:15 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/14/2022 3:33:41 PM</td>
                              <td>600.00</td>
                            </tr>
                            <tr>
                              <td>26</td>
                              <td>982388</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TG2io9tRon9Yftrhg761cf31wFRR6daFF9T3Ah4WCiUAag
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>11/26/2021 4:58:35 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>27</td>
                              <td>982386</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TGRvLAcKUfxCecsdsfvf234fvd3323ocN5o53zxXtyciwA
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/1/2021 8:41:13 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                            <tr>
                              <td>28</td>
                              <td>982308</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TRWDia9Wigsfsrc4wADyqsrx15veumMwUzpww3ao
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>1/20/2022 7:18:17 PM</td>
                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/20/2022 7:20:01 PM</td>
                              <td>100.00</td>
                            </tr>
                            <tr>
                              <td>29</td>
                              <td>982127</td>

                              <td className="text-center">
                                <div className="sp-flx">
                                  <div className="table-actions">
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="icon-links"
                                      data-title="View on tronscan.org"
                                    >
                                      <i
                                        className="fa fa-external-link"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        TE4xC5DpfyFg4LrKMesde32aYXHmNnHNygpYuuJc
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>12/31/2021 11:53:35 AM</td>
                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!---pagination start--> */}
                      <div className="pagination-wrapper">
                        <div className="pagination-box"></div>
                      </div>
                      {/* <!---pagination end--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyTeam;
