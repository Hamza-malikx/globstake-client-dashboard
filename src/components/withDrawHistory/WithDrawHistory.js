import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const WithDrawHistory = () => {
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
              <Navbar></Navbar>
            </div>
          </div>
        </div>
        {/* <!--------start dashboard---------------> */}

        <div className="side-app container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div className="card shadow">
                <div className="card-header bg-transparent">
                  <h4 className="card-title mb-0">Withdrawal History</h4>
                </div>

                <div className="card-body p-0">
                  <div className="grid-margin">
                    <div className="">
                      <div className="table-responsive">
                        <table className="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead className="thead-light">
                            <tr>
                              <th>S.No</th>

                              <th>Withdrawal Token</th>
                              <th>Txn</th>
                              <th>Paid Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="9" className="text-center">
                                No Data Found
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!---pagination start--> */}
                      <div className="pagination-wrapper">
                        <div className="pagination">
                          <div className="pagination-container">
                            <ul className="pagination">
                              <li className="disabled PagedList-pageCountAndLocation">
                                <a>Page 1 of 0.</a>
                              </li>
                              <li className="disabled PagedList-pageCountAndLocation">
                                <a>Showing items 1 through 0 of 0.</a>
                              </li>
                            </ul>
                          </div>
                        </div>
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

export default WithDrawHistory;
