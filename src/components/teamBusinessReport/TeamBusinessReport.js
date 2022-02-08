import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./teamBusinessreport.css";
import { Link } from "react-router-dom";
const TeamBusinessReport = () => {
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
                  <h4 className="card-title mb-0">Team Business Report</h4>
                </div>
                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div className="table-responsive">
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>ID</th>
                              <th>Wallet Address</th>
                              <th>Investment</th>
                              <th>Team Business</th>
                              <th>Total</th>
                              <th>View Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>931309</td>
                              <td>
                                Rsfdhfh345TZGFDZ4fF53DXbEyasaffrevtdmc8hqBeAwPMF7xgmCm
                              </td>
                              <td>0</td>
                              <td>353000</td>
                              <td>353000</td>
                              <td>
                                <Link to="/business-target" className="view">
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>278568</td>
                              <td>
                                TMpPEHiU4rCC9dsfsccfs2FAsm1GLPCoBqvsfddvvrvv34SLvGb5K
                              </td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>
                                <Link to="/business-target" className="view">
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>595026</td>
                              <td>TRBiBU4AemttFKuQnSW9fYirxt3M8sgvu6</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>
                                <Link to="/business-target" className="view">
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>791818</td>
                              <td>TLEVLSsSasfgdgt4AzEuNioqF3HQWNTtGcW5GHp3i</td>
                              <td>100</td>
                              <td>0</td>
                              <td>100</td>
                              <td>
                                <Link to="/business-target" className="view">
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>264620</td>
                              <td>
                                TTuMwUcD76Wvftjook23csfHZVxNj4c288EeRscV74t6P
                              </td>
                              <td>100</td>
                              <td>0</td>
                              <td>100</td>
                              <td>
                                <Link to="/business-target" className="view">
                                  View
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default TeamBusinessReport;
