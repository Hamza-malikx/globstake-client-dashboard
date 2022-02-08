import React from "react";
import "../../css/main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
const TeamEE = () => {
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
                  <h4 className="card-title mb-0">TSP</h4>
                </div>
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-md">
                      <div className="overflow-hidden">
                        <div className="card-body">
                          <form action="/TeamEE" method="post">
                            {" "}
                            <div className="row">
                              <div className="col-md-3">
                                <div className="form-group overflow-hidden">
                                  <select
                                    id="level"
                                    name="level"
                                    className="form-control"
                                  >
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
                              <div className="col-md-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="fdate"
                                  id="fdate"
                                  placeholder="Enter From Date"
                                  autoComplete="off"
                                />
                              </div>
                              <div className="col-md-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tdate"
                                  id="tdate"
                                  placeholder="Enter To Date"
                                  autoComplete="off"
                                />
                              </div>

                              <div className="col-md-2">
                                <input
                                  type="button"
                                  className="btn btn-primary"
                                  // formaction="TeamEE"
                                  // formmethod="get"
                                  value="Search"
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        {/* <!------=======================================--> */}
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

                                    <th>From Id</th>

                                    <th>Level</th>
                                    <th>Package Amount</th>
                                    <th>Token</th>
                                    <th>Amount(USD)</th>
                                    <th>Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td> 1</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.063362732103</td>
                                    <td> 0.3</td>
                                    <td> 27/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 2</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.063362732103</td>
                                    <td> 0.3</td>
                                    <td> 27/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 3</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.13200886359</td>
                                    <td> 0.3</td>
                                    <td> 26/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 4</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.13200886359</td>
                                    <td> 0.3</td>
                                    <td> 26/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 5</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.1966209684756</td>
                                    <td> 0.3</td>
                                    <td> 25/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 6</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.1966209684756</td>
                                    <td> 0.3</td>
                                    <td> 25/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 7</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2555795099385</td>
                                    <td> 0.3</td>
                                    <td> 24/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 8</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2555795099385</td>
                                    <td> 0.3</td>
                                    <td> 24/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 9</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.313870053807</td>
                                    <td> 0.3</td>
                                    <td> 23/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 10</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.313870053807</td>
                                    <td> 0.3</td>
                                    <td> 23/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 11</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.279374188005</td>
                                    <td> 0.3</td>
                                    <td> 22/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 12</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.279374188005</td>
                                    <td> 0.3</td>
                                    <td> 22/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 13</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2520999549405</td>
                                    <td> 0.3</td>
                                    <td> 21/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 14</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2520999549405</td>
                                    <td> 0.3</td>
                                    <td> 21/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 15</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2757870851322</td>
                                    <td> 0.3</td>
                                    <td> 20/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 16</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2757870851322</td>
                                    <td> 0.3</td>
                                    <td> 20/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 17</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2895899941251</td>
                                    <td> 0.3</td>
                                    <td> 19/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 18</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2895899941251</td>
                                    <td> 0.3</td>
                                    <td> 19/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 19</td>

                                    <td> 264620</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2766630498696</td>
                                    <td> 0.3</td>
                                    <td> 18/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 20</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.2766630498696</td>
                                    <td> 0.3</td>
                                    <td> 18/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 21</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.3001692160848</td>
                                    <td> 0.3</td>
                                    <td> 17/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 22</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.328590850959</td>
                                    <td> 0.3</td>
                                    <td> 16/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 23</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.420223359345</td>
                                    <td> 0.3</td>
                                    <td> 15/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 24</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.665539041048</td>
                                    <td> 0.3</td>
                                    <td> 14/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 25</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.6647412017052</td>
                                    <td> 0.3</td>
                                    <td> 13/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 26</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.710629472217</td>
                                    <td> 0.3</td>
                                    <td> 12/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 27</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.706569810696</td>
                                    <td> 0.3</td>
                                    <td> 11/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 28</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.632727535617</td>
                                    <td> 0.3</td>
                                    <td> 10/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 29</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.6624208378584</td>
                                    <td> 0.3</td>
                                    <td> 09/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 30</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.6463632256911</td>
                                    <td> 0.3</td>
                                    <td> 08/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 31</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.594330950748</td>
                                    <td> 0.3</td>
                                    <td> 07/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 32</td>

                                    <td> 791818</td>

                                    <td> 1</td>
                                    <td> 100 USD </td>
                                    <td> 0.548212059927</td>
                                    <td> 0.3</td>
                                    <td> 06/01/2022</td>
                                  </tr>
                                  <tr>
                                    <td> 33</td>

                                    <td> 509298</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 34</td>

                                    <td> 264262</td>

                                    <td> 15</td>
                                    <td> 500 USD </td>
                                    <td> 0.138180645036</td>
                                    <td> 0.15</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 35</td>

                                    <td> 836211</td>

                                    <td> 15</td>
                                    <td> 500 USD </td>
                                    <td> 0.138180645036</td>
                                    <td> 0.15</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 36</td>

                                    <td> 778303</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 37</td>

                                    <td> 639297</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 38</td>

                                    <td> 815466</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 39</td>

                                    <td> 202390</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 40</td>

                                    <td> 484786</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 41</td>

                                    <td> 724744</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 42</td>

                                    <td> 965377</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 43</td>

                                    <td> 954709</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 44</td>

                                    <td> 737739</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 45</td>

                                    <td> 405186</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 46</td>

                                    <td> 841046</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 47</td>

                                    <td> 589860</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 48</td>

                                    <td> 280426</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 49</td>

                                    <td> 323827</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 50</td>

                                    <td> 435928</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 51</td>

                                    <td> 795126</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 52</td>

                                    <td> 931538</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 53</td>

                                    <td> 500389</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 54</td>

                                    <td> 433691</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 55</td>

                                    <td> 743082</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 56</td>

                                    <td> 662035</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 57</td>

                                    <td> 384391</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 58</td>

                                    <td> 960540</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 59</td>

                                    <td> 343861</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 60</td>

                                    <td> 216012</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 61</td>

                                    <td> 720986</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 62</td>

                                    <td> 839869</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 63</td>

                                    <td> 728651</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 64</td>

                                    <td> 568353</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 65</td>

                                    <td> 218528</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 66</td>

                                    <td> 209760</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 67</td>

                                    <td> 886040</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 68</td>

                                    <td> 646270</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 69</td>

                                    <td> 982970</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 70</td>

                                    <td> 312450</td>

                                    <td> 14</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 71</td>

                                    <td> 948096</td>

                                    <td> 6</td>
                                    <td> 100 USD </td>
                                    <td> 0.0644843010168</td>
                                    <td> 0.07</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 72</td>

                                    <td> 162383</td>

                                    <td> 13</td>
                                    <td> 200 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 73</td>

                                    <td> 224859</td>

                                    <td> 12</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 74</td>

                                    <td> 142223</td>

                                    <td> 14</td>
                                    <td> 500 USD </td>
                                    <td> 0.092120430024</td>
                                    <td> 0.1</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 75</td>

                                    <td> 195376</td>

                                    <td> 13</td>
                                    <td> 100 USD </td>
                                    <td> 0.0092120430024</td>
                                    <td> 0.01</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 76</td>

                                    <td> 150259</td>

                                    <td> 10</td>
                                    <td> 100 USD </td>
                                    <td> 0.0276361290072</td>
                                    <td> 0.03</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 77</td>

                                    <td> 104205</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0184240860048</td>
                                    <td> 0.02</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 78</td>

                                    <td> 667179</td>

                                    <td> 10</td>
                                    <td> 300 USD </td>
                                    <td> 0.0829083870216</td>
                                    <td> 0.09</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 79</td>

                                    <td> 560972</td>

                                    <td> 9</td>
                                    <td> 100 USD </td>
                                    <td> 0.0368481720096</td>
                                    <td> 0.04</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 80</td>

                                    <td> 532709</td>

                                    <td> 8</td>
                                    <td> 100 USD </td>
                                    <td> 0.046060215012</td>
                                    <td> 0.05</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 81</td>

                                    <td> 184575</td>

                                    <td> 7</td>
                                    <td> 100 USD </td>
                                    <td> 0.0552722580144</td>
                                    <td> 0.06</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 82</td>

                                    <td> 683191</td>

                                    <td> 6</td>
                                    <td> 100 USD </td>
                                    <td> 0.0644843010168</td>
                                    <td> 0.07</td>
                                    <td> 03/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 83</td>

                                    <td> 142223</td>

                                    <td> 14</td>
                                    <td> 500 USD </td>
                                    <td> 0.089889101624</td>
                                    <td> 0.1</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 84</td>

                                    <td> 195376</td>

                                    <td> 13</td>
                                    <td> 100 USD </td>
                                    <td> 0.0089889101624</td>
                                    <td> 0.01</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 85</td>

                                    <td> 150259</td>

                                    <td> 10</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 86</td>

                                    <td> 104205</td>

                                    <td> 11</td>
                                    <td> 100 USD </td>
                                    <td> 0.0179778203248</td>
                                    <td> 0.02</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 87</td>

                                    <td> 667179</td>

                                    <td> 10</td>
                                    <td> 300 USD </td>
                                    <td> 0.0809001914616</td>
                                    <td> 0.09</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 88</td>

                                    <td> 560972</td>

                                    <td> 9</td>
                                    <td> 100 USD </td>
                                    <td> 0.0359556406496</td>
                                    <td> 0.04</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 89</td>

                                    <td> 532709</td>

                                    <td> 8</td>
                                    <td> 100 USD </td>
                                    <td> 0.044944550812</td>
                                    <td> 0.05</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 90</td>

                                    <td> 184575</td>

                                    <td> 7</td>
                                    <td> 100 USD </td>
                                    <td> 0.0539334609744</td>
                                    <td> 0.06</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 91</td>

                                    <td> 683191</td>

                                    <td> 6</td>
                                    <td> 100 USD </td>
                                    <td> 0.0629223711368</td>
                                    <td> 0.07</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 92</td>

                                    <td> 264262</td>

                                    <td> 15</td>
                                    <td> 500 USD </td>
                                    <td> 0.134833652436</td>
                                    <td> 0.15</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 93</td>

                                    <td> 836211</td>

                                    <td> 15</td>
                                    <td> 500 USD </td>
                                    <td> 0.134833652436</td>
                                    <td> 0.15</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 94</td>

                                    <td> 778303</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 95</td>

                                    <td> 639297</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 96</td>

                                    <td> 815466</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 97</td>

                                    <td> 202390</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 98</td>

                                    <td> 484786</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 99</td>

                                    <td> 724744</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
                                  </tr>
                                  <tr>
                                    <td> 100</td>

                                    <td> 965377</td>

                                    <td> 15</td>
                                    <td> 100 USD </td>
                                    <td> 0.0269667304872</td>
                                    <td> 0.03</td>
                                    <td> 02/12/2021</td>
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
                        {/* <!-------------=====================</div>============--> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <style>
    @media(max-width:980px) {
        .mr5 {
            margin-top: 7px;
        }

        .btnset {
            margin-top: 7px !important;
        }
    }

    .btnset {
        margin-top: 3px;
    }

    .contpdset {
        padding: 15px !important;
    }
</style> */}
        <Footer />
      </div>
    </div>
  );
};

export default TeamEE;
