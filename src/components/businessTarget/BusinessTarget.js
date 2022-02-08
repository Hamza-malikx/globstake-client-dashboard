import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const BusinessTarget = () => {
  return (
    <div>
      <div class="page">
        <div class="page-main">
          {/* <!-- app-content--> */}
          <div class="app-content">
            {/* <!-- HEADER --> */}
            <Header />
            {/* <!-- HEADER END --> <!--Resposnisve Navbar--> */}
            <div class="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-sm-none">
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div class="d-flex order-lg-2 ml-auto">
                  <div class="dropdown text-center selector profile-1 mt-4">
                    <a href="logout.html" class="nav-link leading-none d-flex">
                      <span>
                        <img
                          src="assets/images/logout_icon.png"
                          class="avatar brround cover-image mb-1 ml-0"
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
              class="sticky-wrapper"
              style={{ height: "57px" }}
            >
              <Navbar />
            </div>
          </div>
        </div>
        {/* <!--------start dashboard---------------> */}

        <div class="side-app container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div class="card shadow">
                <div class="card-header bg-transparent">
                  <h4 class="card-title mb-0">Business Target</h4>
                </div>
                <div class="card-body p-0">
                  <div class="grid-margin">
                    <div class="">
                      <div
                        class="table-responsive"
                        style={{ maxHeight: "500px", overflow: "scroll" }}
                      >
                        <table class="table card-table border table-vcenter text-nowrap align-items-center">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th> ID</th>
                              <th>Wallet</th>
                              <th>Investment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="4" class="text-center">
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

export default BusinessTarget;
