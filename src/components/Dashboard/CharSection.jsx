import React from "react";
import RevnueChart from "./RevnueChart";
import SalesChart from "./SalesChart";

const CharSection = () => {
  return (
    <div className="grid xl:grid-cols-3 gap-6 grid-cols-1">
      <div className="xl:col-span-2">
        <RevnueChart />
      </div>
      <div className="space-y-6">
        <SalesChart />
      </div>
    </div>
  );
};

export default CharSection;
