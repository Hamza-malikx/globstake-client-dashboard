import React from "react";
import "../../css/main.css";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const Navbar = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [showDropdown1, setShowDropdown1] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#03256c",
      }}
    >
      <div className="horizontal-main hor-menu clearfix">
        <nav className="horizontalMenu clearfix">
          <div className="overlapblackbg"></div>
          <ul className="horizontalMenu-list container">
            <li>
              <Link to="/" className="">
                <i
                  className="fa fa-laptop"
                  style={{
                    marginRight: "9px",
                    marginLeft: "none !important",
                  }}
                ></i>{" "}
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/activate-history" className="">
                <i
                  className="fa fa-users"
                  style={{
                    marginRight: "9px",
                    marginLeft: "none !important",
                  }}
                ></i>{" "}
                Activate History
              </Link>
            </li>
            <li style={{ marginLeft: "10px" }}>
              {/* <i class="fa fa-laptop"></i>Withdrawal */}
              <Dropdown
              // onMouseLeave={() => setShowDropdown(false)}
              // onMouseOver={() => setShowDropdown(true)}
              >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                </Dropdown.Toggle>

                <Dropdown.Menu
                // show={showDropdown}
                >
                  <Dropdown.Item>
                    <Link to="/withdraw" className="linksOnDrop">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Withdrawal
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/withdraw-history" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Withdrawal History
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li style={{ marginLeft: "10px" }}>
              {/* <i class="fa fa-laptop"></i>Withdrawal */}
              <Dropdown
              // onMouseLeave={() => setShowDropdown1(false)}
              // onMouseOver={() => setShowDropdown1(true)}
              >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="teamDropDown"
                  // show={showDropdown1}
                >
                  <Dropdown.Item>
                    <Link to="/my-team" className="linksOnDrop">
                      <i
                        className="fal fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      My Team
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/my-referral" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      My Referral
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
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
                  </Dropdown.Item>
                  <Dropdown.Item>
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
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li style={{ marginLeft: "10px" }}>
              {/* <i class="fa fa-laptop"></i>Withdrawal */}
              <Dropdown
              // onMouseLeave={() => setShowDropdown(false)}
              // onMouseOver={() => setShowDropdown(true)}
              >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                </Dropdown.Toggle>

                <Dropdown.Menu
                // show={showDropdown}
                >
                  <Dropdown.Item>
                    <Link to="/daily-roi" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      DSP
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/teamEE" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      TSP
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/daily-nft" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Pool Income
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/referral-income" className="linksOnDrop">
                      <i
                        className="fa fa-angle-right"
                        style={{
                          marginRight: "9px",
                          marginLeft: "none !important",
                        }}
                      ></i>
                      Referral Earning
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
        {/* <!-- NAV END --> */}
      </div>
    </div>
  );
};

export default Navbar;
