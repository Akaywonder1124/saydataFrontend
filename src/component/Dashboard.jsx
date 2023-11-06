import React from "react";
import DashboardCard from "./DashboardCard";
import Overview from "./Overview";
import RecentFiles from "./RecentFiles";
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  const { openModal } = useOutletContext();
  return (
    <div className="flex flex-col">
      <Overview openModal={openModal} />
      <DashboardCard />
      <RecentFiles />
    </div>
  );
}
