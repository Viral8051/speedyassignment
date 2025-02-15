import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const UserGrowthChart = ({ data }) => {

  //track active data point when hovered
  const [activePoint, setActivePoint] = useState(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">User Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          onMouseMove={(e) => {
            if (e.isTooltipActive) {
              setActivePoint(e.activeTooltipIndex);
            } else {
              setActivePoint(null);
            }
          }}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => value.toLocaleString()} 
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "5px",
              padding: "5px",
              color: "#fff",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{
              r: 8,
              stroke: "#8884d8",
              strokeWidth: 2,
              fill: "#fff",
            }}
            animationDuration={500}
          />
          <Line
            type="monotone"
            dataKey="active"
            stroke="#82ca9d"
            activeDot={{
              r: 8,
              stroke: "#82ca9d",
              strokeWidth: 2,
              fill: "#fff",
            }}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* active information */}
      {activePoint !== null && (
        <div className="mt-4">
          <strong>Month:</strong> {data[activePoint].month} <br />
          <strong>Total Users:</strong> {data[activePoint].total.toLocaleString()} <br />
          <strong>Active Users:</strong> {data[activePoint].active.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default UserGrowthChart;
