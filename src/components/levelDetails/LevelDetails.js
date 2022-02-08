import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const LevelDetails = () => {
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
                  <h4 className="card-title mb-0">Level Details</h4>
                </div>
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-md">
                      <div className="overflow-hidden">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group overflow-hidden">
                                <label>Select Level :</label>
                                <select
                                  className="form-control select2 w-100 select2-hidden-accessible"
                                  tabIndex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="">Select Level</option>
                                  <option value="0">All Level</option>
                                  <option value="1">Level 1</option>
                                  <option value="2">Level 2</option>
                                  <option value="3">Level 3</option>
                                  <option value="4">Level 4</option>
                                  <option value="5">Level 5</option>
                                  <option value="6">Level 6</option>
                                  <option value="7">Level 7</option>
                                  <option value="8">Level 8</option>
                                  <option value="9">Level 9</option>
                                  <option value="10">Level 10</option>
                                  <option value="11">Level 11</option>
                                  <option value="12">Level 12</option>
                                  <option value="13">Level 13</option>
                                  <option value="14">Level 14</option>
                                  <option value="15">Level 15</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group overflow-hidden">
                                <label>Choose Status :</label>
                                <select
                                  className="form-control select2 w-100 select2-hidden-accessible"
                                  tabIndex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="">Select Status</option>
                                  <option value="2">All</option>
                                  <option value="1">Active</option>
                                  <option value="0">In-Active</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="grid-margin">
                            <div className="">
                              <div
                                className="table-responsive"
                                style={{
                                  maxHeight: "500px",
                                  overflow: "scroll",
                                }}
                              >
                                <table className="table card-table border table-vcenter text-nowrap align-items-center">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>S.No.</th>
                                      <th>User ID</th>

                                      <th>Level</th>
                                      <th>Reg Date</th>
                                      <th>Activation Date</th>

                                      <th>ID Type</th>
                                      <th>Package</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>710164</td>
                                      <td>16</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>791044</td>
                                      <td>19</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>128314</td>
                                      <td>15</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>353978</td>
                                      <td>14</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>122047</td>
                                      <td>18</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>6</td>
                                      <td>589405</td>
                                      <td>17</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>7</td>
                                      <td>261851</td>
                                      <td>20</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>8</td>
                                      <td>149392</td>
                                      <td>16</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>9</td>
                                      <td>725780</td>
                                      <td>16</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>10</td>
                                      <td>867491</td>
                                      <td>20</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>11</td>
                                      <td>643976</td>
                                      <td>16</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>12</td>
                                      <td>732793</td>
                                      <td>18</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>13</td>
                                      <td>810402</td>
                                      <td>16</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>14</td>
                                      <td>614706</td>
                                      <td>15</td>
                                      <td>27/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>15</td>
                                      <td>734986</td>
                                      <td>12</td>
                                      <td>27/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>16</td>
                                      <td>640458</td>
                                      <td>16</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>17</td>
                                      <td>124429</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>18</td>
                                      <td>332671</td>
                                      <td>18</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>19</td>
                                      <td>758738</td>
                                      <td>20</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>20</td>
                                      <td>279357</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>21</td>
                                      <td>863237</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>22</td>
                                      <td>903400</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>23</td>
                                      <td>503580</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>24</td>
                                      <td>561450</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>25</td>
                                      <td>370646</td>
                                      <td>17</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>26</td>
                                      <td>427941</td>
                                      <td>17</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>27</td>
                                      <td>603482</td>
                                      <td>18</td>
                                      <td>26/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>28</td>
                                      <td>575122</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>29</td>
                                      <td>586474</td>
                                      <td>19</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>30</td>
                                      <td>641849</td>
                                      <td>16</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>200 USD</td>
                                    </tr>
                                    <tr>
                                      <td>31</td>
                                      <td>301229</td>
                                      <td>16</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>200 USD</td>
                                    </tr>
                                    <tr>
                                      <td>32</td>
                                      <td>404173</td>
                                      <td>17</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>33</td>
                                      <td>256580</td>
                                      <td>16</td>
                                      <td>26/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>34</td>
                                      <td>317327</td>
                                      <td>16</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>35</td>
                                      <td>534125</td>
                                      <td>20</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>36</td>
                                      <td>705523</td>
                                      <td>15</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>37</td>
                                      <td>389019</td>
                                      <td>15</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>1000 USD</td>
                                    </tr>
                                    <tr>
                                      <td>38</td>
                                      <td>389486</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>39</td>
                                      <td>529929</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>40</td>
                                      <td>156062</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>41</td>
                                      <td>676116</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>42</td>
                                      <td>106986</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>43</td>
                                      <td>613604</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>44</td>
                                      <td>400562</td>
                                      <td>16</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>45</td>
                                      <td>256625</td>
                                      <td>16</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>46</td>
                                      <td>293663</td>
                                      <td>16</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>47</td>
                                      <td>873483</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>48</td>
                                      <td>834693</td>
                                      <td>19</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>49</td>
                                      <td>699090</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>50</td>
                                      <td>550273</td>
                                      <td>20</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>51</td>
                                      <td>804999</td>
                                      <td>20</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>52</td>
                                      <td>632751</td>
                                      <td>18</td>
                                      <td>25/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>53</td>
                                      <td>876625</td>
                                      <td>17</td>
                                      <td>25/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>54</td>
                                      <td>374011</td>
                                      <td>17</td>
                                      <td>24/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>55</td>
                                      <td>419550</td>
                                      <td>16</td>
                                      <td>24/01/2022</td>
                                      <td>26/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>56</td>
                                      <td>886284</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>57</td>
                                      <td>730132</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>58</td>
                                      <td>995958</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>59</td>
                                      <td>848561</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>60</td>
                                      <td>894527</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>61</td>
                                      <td>666933</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>27/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>62</td>
                                      <td>553732</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>63</td>
                                      <td>530309</td>
                                      <td>14</td>
                                      <td>24/01/2022</td>
                                      <td>25/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>1000 USD</td>
                                    </tr>
                                    <tr>
                                      <td>64</td>
                                      <td>129169</td>
                                      <td>17</td>
                                      <td>24/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>65</td>
                                      <td>325096</td>
                                      <td>16</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>66</td>
                                      <td>318253</td>
                                      <td>18</td>
                                      <td>24/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>67</td>
                                      <td>658275</td>
                                      <td>16</td>
                                      <td>24/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>2000 USD</td>
                                    </tr>
                                    <tr>
                                      <td>68</td>
                                      <td>126107</td>
                                      <td>15</td>
                                      <td>24/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>69</td>
                                      <td>578324</td>
                                      <td>17</td>
                                      <td>23/01/2022</td>
                                      <td>23/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>70</td>
                                      <td>559121</td>
                                      <td>18</td>
                                      <td>23/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>71</td>
                                      <td>777479</td>
                                      <td>18</td>
                                      <td>23/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>72</td>
                                      <td>495444</td>
                                      <td>17</td>
                                      <td>23/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>73</td>
                                      <td>440989</td>
                                      <td>19</td>
                                      <td>23/01/2022</td>
                                      <td>23/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>74</td>
                                      <td>343314</td>
                                      <td>17</td>
                                      <td>23/01/2022</td>
                                      <td>23/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>75</td>
                                      <td>635166</td>
                                      <td>19</td>
                                      <td>22/01/2022</td>
                                      <td>23/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>6000 USD</td>
                                    </tr>
                                    <tr>
                                      <td>76</td>
                                      <td>793391</td>
                                      <td>18</td>
                                      <td>22/01/2022</td>
                                      <td>22/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>300 USD</td>
                                    </tr>
                                    <tr>
                                      <td>77</td>
                                      <td>437240</td>
                                      <td>17</td>
                                      <td>22/01/2022</td>
                                      <td>22/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>78</td>
                                      <td>129172</td>
                                      <td>18</td>
                                      <td>22/01/2022</td>
                                      <td>22/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>300 USD</td>
                                    </tr>
                                    <tr>
                                      <td>79</td>
                                      <td>332811</td>
                                      <td>19</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>80</td>
                                      <td>156873</td>
                                      <td>17</td>
                                      <td>22/01/2022</td>
                                      <td>22/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>81</td>
                                      <td>145901</td>
                                      <td>17</td>
                                      <td>22/01/2022</td>
                                      <td>22/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>82</td>
                                      <td>158152</td>
                                      <td>16</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>83</td>
                                      <td>470102</td>
                                      <td>15</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>84</td>
                                      <td>156020</td>
                                      <td>14</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>85</td>
                                      <td>937543</td>
                                      <td>17</td>
                                      <td>22/01/2022</td>
                                      <td>24/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>86</td>
                                      <td>819464</td>
                                      <td>13</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>87</td>
                                      <td>295383</td>
                                      <td>12</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>88</td>
                                      <td>765197</td>
                                      <td>11</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>89</td>
                                      <td>576551</td>
                                      <td>16</td>
                                      <td>22/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>90</td>
                                      <td>402432</td>
                                      <td>14</td>
                                      <td>22/01/2022</td>
                                      <td>23/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>1000 USD</td>
                                    </tr>
                                    <tr>
                                      <td>91</td>
                                      <td>129232</td>
                                      <td>17</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>92</td>
                                      <td>444272</td>
                                      <td>17</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>93</td>
                                      <td>268478</td>
                                      <td>19</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>94</td>
                                      <td>235549</td>
                                      <td>20</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>95</td>
                                      <td>150412</td>
                                      <td>20</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>96</td>
                                      <td>364402</td>
                                      <td>14</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>97</td>
                                      <td>650913</td>
                                      <td>14</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>98</td>
                                      <td>287866</td>
                                      <td>14</td>
                                      <td>21/01/2022</td>
                                      <td>NA</td>

                                      <td style={{ color: "red" }}>Inactive</td>

                                      <td>Inactive USD</td>
                                    </tr>
                                    <tr>
                                      <td>99</td>
                                      <td>953717</td>
                                      <td>20</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>100 USD</td>
                                    </tr>
                                    <tr>
                                      <td>100</td>
                                      <td>623318</td>
                                      <td>14</td>
                                      <td>21/01/2022</td>
                                      <td>21/01/2022</td>

                                      <td style={{ color: "#02fd02" }}>
                                        Active
                                      </td>

                                      <td>1000 USD</td>
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LevelDetails;
