import React from "react";
import "../../css/main.css";
import "./myReferral.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const MyReferral = () => {
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
                  <h4 className="card-title mb-0">My Referral</h4>
                </div>

                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div className="table-responsive">
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead className="thead-light">
                            <tr>
                              <th>S.No</th>
                              <th>User ID</th>
                              <th>Package</th>
                              <th>Date</th>
                              <th>Remark</th>
                              <th>Activation Date Time</th>
                              <th>Total Active Team </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>5</td>
                              <td>264620</td>
                              <td>100 USD</td>
                              <td>1/17/2022 5:25:55 PM</td>

                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/17/2022 5:42:41 PM</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>791818</td>
                              <td>100 USD</td>
                              <td>1/5/2022 7:39:25 PM</td>

                              <td className="actbtn">
                                <button type="button" className="btn1-success">
                                  Active
                                </button>
                              </td>
                              <td>1/5/2022 7:57:40 PM</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>595026</td>
                              <td>0 USD</td>
                              <td>12/7/2021 12:16:50 PM</td>

                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>278568</td>
                              <td>0 USD</td>
                              <td>11/26/2021 8:26:38 PM</td>

                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>931309</td>
                              <td>0 USD</td>
                              <td>11/26/2021 4:54:16 PM</td>

                              <td className="actbtn">
                                <button type="button" className="btn-primary">
                                  Inactive
                                </button>
                              </td>
                              <td>NA</td>
                              <td>1433</td>
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

export default MyReferral;
