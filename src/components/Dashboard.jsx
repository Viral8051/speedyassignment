import React, { Suspense, lazy } from "react";
import { useDashboard } from "./DashboardContext";
import { Routes, Route, Link } from "react-router-dom"; 

// Lazy load for loading
const KeyMetrics = lazy(() => import("./KeyMetrics"));
const UserGrowthChart = lazy(() => import("./UserGrowthChart"));
const RevenueDistribution = lazy(() => import("./RevenueDistribution"));
const TopSongsChart = lazy(() => import("./TopSongsChart"));
const DataTable = lazy(() => import("./DataTable"));

const Dashboard = () => {
  // Fetching data from the context
  const { keyMetrics, userGrowthData, revenueDistributionData, topSongsData, recentStreamsData } = useDashboard();

  // Just checking the data to make sure everything is coming through okay
  console.log("Key Metrics:", keyMetrics); 
  console.log("User Growth Data:", userGrowthData); 
  console.log("Revenue Distribution Data:", revenueDistributionData); 
  console.log("Top Songs Data:", topSongsData); 
  console.log("Recent Streams Data:", recentStreamsData);

  return (
    <div className="flex block">
      
      <div className="sideBar w-64 bg-[#181818] text-white rounded-xl p-3">
        <h2 className="text-xl font-bold text-center mb-6">Speedy</h2>
        <ul>
          <li className="mb-4 hover:text-green-500 cursor-pointer">
            <Link to="/">Dashboard</Link> 
          </li>
          <li className="mb-4 hover:text-green-500 cursor-pointer">
            <Link to="/users">Users</Link> 
          </li>
          <li className="mb-4 hover:text-green-500 cursor-pointer">
            <Link to="/revenue">Revenue</Link> 
          </li>
          <li className="mb-4 hover:text-green-500 cursor-pointer">
            <Link to="/artists">Artists</Link> 
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-7">Speedy Dashboard</h1>

        {/* Suspense wrapper to keep things smooth while components are loading */}
        <Suspense fallback={<div>Loading... Give us a sec!</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <KeyMetrics metrics={keyMetrics} />
                  {/* Displaying the recent streams data in a table */}
                  <DataTable data={recentStreamsData} />
                </>
              }
            />
            <Route
              path="/users"
              element={
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Users Insights</h2>
                  <UserGrowthChart data={userGrowthData} />
                </div>
              }
            />
            <Route
              path="/revenue"
              element={
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Revenue Insights</h2>
                  <RevenueDistribution data={revenueDistributionData} />
                </div>
              }
            />
            <Route
              path="/artists"
              element={
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Top Artists</h2>
                  <TopSongsChart data={topSongsData} />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
