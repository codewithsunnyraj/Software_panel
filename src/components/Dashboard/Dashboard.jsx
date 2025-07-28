import React from "react";
import StatsGrid from "./StatsGrid";
import CharSection from "./CharSection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* static Grid */}
      <StatsGrid />
      <CharSection />
    </div>
  );
};

export default Dashboard;
