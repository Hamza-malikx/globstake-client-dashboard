import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/indexPage/IndexPage";
import ActivateHistoryPage from "../pages/activateHistoryPage/ActivateHistoryPage";
import WithDrawPage from "../pages/withDrawPage/WithDrawPage";
import WithDrawHistoryPage from "../pages/withDrawHistoryPage/WithDrawHistoryPage";
import MyTeamPage from "../pages/myTeamPage/MyTeamPage";
import MyReferralPage from "../pages/myReferralPage/MyReferralPage";
import LevelDetailsPage from "../pages/levelDetailsPage/LevelDetailsPage";
import TeamBusinessReportPage from "../pages/teamBusinessReportPage/TeamBusinessReportPage";
import BusinessTargetPage from "../pages/businessTargetPage/BusinessTargetPage";
import DailyRoiPage from "../pages/dailyRoiPage/DailyRoiPage";
import TeamEEPage from "../pages/teamEEPage/TeamEEPage";
import DailyNftPage from "../pages/dailyNftPage/DailyNftPage";
import ReferralIncomePage from "../pages/referralIncomePage/ReferralIncomePage";
const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
        <Route
          exact
          path="/activate-history"
          element={<ActivateHistoryPage />}
        ></Route>
        <Route exact path="/withdraw" element={<WithDrawPage />}></Route>
        <Route
          exact
          path="/withdraw-history"
          element={<WithDrawHistoryPage />}
        ></Route>
        <Route exact path="/my-team" element={<MyTeamPage />}></Route>
        <Route exact path="/my-referral" element={<MyReferralPage />}></Route>
        <Route
          exact
          path="/level-details"
          element={<LevelDetailsPage />}
        ></Route>
        <Route
          exact
          path="/team-business-report"
          element={<TeamBusinessReportPage />}
        ></Route>
        <Route
          exact
          path="/business-target"
          element={<BusinessTargetPage />}
        ></Route>
        <Route exact path="/daily-roi" element={<DailyRoiPage />}></Route>
        <Route exact path="/teamEE" element={<TeamEEPage />}></Route>
        <Route exact path="/daily-nft" element={<DailyNftPage />}></Route>
        <Route
          exact
          path="/referral-income"
          element={<ReferralIncomePage />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default Config;
