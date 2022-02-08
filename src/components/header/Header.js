import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/images/logo.png";
import logoutIcon from "../../assets/images/logout_icon.png";
const Header = () => {
  const [hamstate, SetHamState] = useState(false);
  const [dropState, setDropState] = useState(false);
  const [dd, setDd] = useState(false);
  const [dd1, setDd1] = useState(false);
  const [dd2, setDd2] = useState(false);
  const handler = () => {
    hamstate === false ? SetHamState(true) : SetHamState(false);
  };
  const HandleToggleVerticaldrop = () => {
    dropState === false ? setDropState(true) : setDropState(false);
  };
  const ddHandler = () => {
    dd === false ? setDd(true) : setDd(false);
    if (dd === false) {
      setDd(true);
      setDd1(false);
      setDd2(false);
    } else {
      setDd(false);
    }
  };
  const ddHandler1 = () => {
    dd1 === false ? setDd1(true) : setDd1(false);
    if (dd1 === false) {
      setDd1(true);
      setDd(false);
      setDd2(false);
    } else {
      setDd1(false);
    }
  };
  const ddHandler2 = () => {
    dd2 === false ? setDd2(true) : setDd2(false);
    if (dd2 === false) {
      setDd2(true);
      setDd1(false);
      setDd(false);
    } else {
      setDd2(false);
    }
  };
  return (
    <div>
      <div className="header header-fixed ">
        <div className="container">
          <div className="d-flex">
            <a id="horizontal-navtoggle" className="animated-arrow hor-toggle">
              <span></span>
            </a>{" "}
            <label className="hamburg" onClick={handler}>
              <span
                className={hamstate === false ? "top-bar" : "top-bar-ss"}
              ></span>
              <span
                className={hamstate === false ? "mid-bar" : "mid-bar-ss"}
              ></span>
              <span
                className={hamstate === false ? "bottom-bar" : "bottom-bar-ss"}
              ></span>
            </label>
            <a className="header-brand" href="index.html">
              {" "}
              <img
                src={logo}
                className="header-brand-img desktop-logo"
                alt="logo"
              />{" "}
              <img
                src={logo}
                className="header-brand-img mobile-view-logo"
                alt="Arox logo"
              />{" "}
            </a>
            <div className="d-flex order-lg-2 ml-auto header-right-icons header-search-icon">
              <div className="dropdown text-center selector profile-1 d-sm-flex d-none">
                <Link to="/logout" className="nav-link leading-none d-flex">
                  <span>
                    <img
                      src={logoutIcon}
                      className="avatar brround cover-image mb-1 ml-0"
                    />
                  </span>
                </Link>
                {/* <i className="fas fa-ellipsis-h ssst"></i> */}

                <div
                  className="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                  style={{ display: "none" }}
                >
                  <div className="text-center bg-image p-4">
                    <a
                      href="#"
                      className="dropdown-item text-center font-weight-sembold user pt-0"
                      data-toggle="dropdown"
                    >
                      Joyce Stewart
                    </a>
                    <span className="text-center user-semi-title ">
                      Member ID:
                      <span>
                        <span className="user-id" id="">
                          000{" "}
                        </span>
                      </span>
                    </span>
                  </div>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="dropdown-icon mdi mdi-account-outline"></i>{" "}
                    Profile{" "}
                  </a>

                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="logout.html">
                    {" "}
                    <i className="dropdown-icon mdi  mdi-logout-variant"></i>{" "}
                    Sign out{" "}
                  </a>
                </div>
              </div>
              {/* <!-- PROFILE -->  */}
              <button
                className="navbar-toggler navresponsive-toggler d-sm-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={HandleToggleVerticaldrop}
              >
                <span className="navbar-toggler-icon fa fa-ellipsis-v text-white"></span>{" "}
              </button>
              <div className="dropdown d-md-flex header-settings"> </div>
              {/* <!-- SIDE-MENU --> */}
            </div>
            <a
              href="#"
              className="header-toggler d-lg-none ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className={hamstate === false ? "sidebar" : "sidebar-ss"}>
          <div className="sideBarWrapperInner">
            <ul>
              <li className="dhb-li">
                <Link to="/" className="dhb" style={{ width: "239px" }}>
                  <i
                    className="fa fa-laptop"
                    style={{ marginRight: "9px", marginTop: "1px" }}
                  ></i>
                  Dashboard
                </Link>
              </li>
              <li className="dhb-li">
                <Link
                  to="/activate-history"
                  className="dhb"
                  style={{ width: "239px" }}
                >
                  <i
                    className="fa fa-users"
                    style={{ marginRight: "9px", marginTop: "1px" }}
                  ></i>
                  Activate History
                </Link>
              </li>
              <li className="wtd" onClick={ddHandler}>
                <i
                  className="fa fa-laptop"
                  style={{
                    marginRight: "9px",
                    marginLeft: "none !important",
                  }}
                ></i>
                Withdrawal
                <i
                  className="fa fa-angle-down"
                  style={{
                    marginLeft: "7px",
                    marginRight: "none !important",
                  }}
                ></i>
              </li>
              <li className={dd === false ? "dd-close" : "dd-open"}>
                <ul>
                  <li className="dddrop">
                    <Link to="/withdraw">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Withdrawal
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/withdraw-history">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Withdrawal History
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="wtd" onClick={ddHandler1}>
                <i
                  className="fa fa-laptop"
                  style={{
                    marginRight: "9px",
                    marginLeft: "none !important",
                  }}
                ></i>
                Team
                <i
                  className="fa fa-angle-down"
                  style={{
                    marginLeft: "7px",
                    marginRight: "none !important",
                  }}
                ></i>
              </li>
              <li
                className={dd1 === false ? "dd-close" : "dd-open"}
                style={{ height: "150px", overflowX: "scroll" }}
              >
                <ul>
                  <li className="dddrop">
                    <Link to="/my-team">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      My Team
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/my-referral">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      My Referral
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/level-details" className="linksOnDrop">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Level Details
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/team-business-report" className="linksOnDrop">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Team Business Report
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="wtd" onClick={ddHandler2}>
                <i
                  className="fa fa-laptop"
                  style={{
                    marginRight: "9px",
                    marginLeft: "none !important",
                  }}
                ></i>
                Earning
                <i
                  className="fa fa-angle-down"
                  style={{
                    marginLeft: "7px",
                    marginRight: "none !important",
                  }}
                ></i>
              </li>
              <li
                className={dd2 === false ? "dd-close" : "dd-open"}
                style={{ height: "120px", overflowX: "scroll" }}
              >
                <ul>
                  <li className="dddrop">
                    <Link to="/daily-roi">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      DSP
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/teamEE">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      TSP
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/daily-nft">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Pool Income
                    </Link>
                  </li>
                  <li className="dddrop">
                    <Link to="/referral-income">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Referral Earning
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={dropState === false ? "dropHeaderab" : "dropHeader"}>
        <Link to="/logout">
          <img src={logoutIcon} className="lgimg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
