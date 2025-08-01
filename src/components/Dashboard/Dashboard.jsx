import React from "react";
import StatsGrid from "./StatsGrid";
import CharSection from "./CharSection";
import TableSection from "./TableSection";
import AcitivityFeed from "./AcitivityFeed";

const Dashboard = () => {
  return (
    <div className="space-y-6 ">
      {/* static Grid */}
      <StatsGrid />
      <CharSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:mb-32">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <AcitivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;
