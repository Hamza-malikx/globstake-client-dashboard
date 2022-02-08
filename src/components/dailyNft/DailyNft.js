import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const DailyNft = () => {
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
                  <h4 className="card-title mb-0">Pool Income</h4>
                </div>
                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div className="table-responsive">
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th> ID</th>
                              <th>Rank</th>
                              <th>Pool(%)</th>
                              <th>Token</th>
                              <th>Amount(USD)</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>00</td>
                              <td>00</td>
                              <td>00</td>
                              <td>00</td>
                              <td>00</td>
                              <td>00</td>
                            </tr>
                            <tr>
                              <td colSpan="7" align="center">
                                No Data Found
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

export default DailyNft;
