import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const ReferralIncome = () => {
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
                  <h4 className="card-title mb-0">Referral Earning</h4>
                </div>

                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div
                        className="table-responsive"
                        style={{ maxHeight: "500px", overflow: "scroll" }}
                      >
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead className="thead-light">
                            <tr>
                              <th>S.No</th>

                              <th>From ID</th>
                              <th>Package</th>
                              <th>Token</th>
                              <th>Amount(USD)</th>
                              <th>TXN</th>

                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>

                              <td>264620</td>
                              <td>100 USD</td>
                              <td>9.15951</td>
                              <td>10</td>
                              <td>
                                997df0c5f76ddafsfsx452sf3baa79b8947294846ac29d9caa5d98f0fc003e4d6bab7ceea39c
                              </td>

                              <td>17/01/2022</td>
                            </tr>
                            <tr>
                              <td>2</td>

                              <td>791818</td>
                              <td>100 USD</td>
                              <td>17.02488</td>
                              <td>10</td>
                              <td>
                                18f82d06f78170qwedxdty45g57jjgjgjkbbs67099db8628721d0f71363af947b9e86ff9fd836554029d9bb9c
                              </td>

                              <td>05/01/2022</td>
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

export default ReferralIncome;
