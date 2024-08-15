// components/QBRPage.js
import React from "react";
import ProgressGoals from "./ProgressGoals";
import FutureGoals from "./FutureGoals";
import TaskCleared from "./TaskCleared";
import ChangePlans from "./ChangePlans";
import PerformanceGraph from "./PerformanceGraph";
import TeamPerformance from "./TeamPerformance";
import Attendance from "./Attendance";

const QBRPage = () => {
  return (
    <div>
      <h1>Quarterly Business Review</h1>
      <ProgressGoals />
      <FutureGoals />
      <TaskCleared />
      <ChangePlans />
      <PerformanceGraph />
      <TeamPerformance />
      <Attendance />
    </div>
  );
};

export default QBRPage;
