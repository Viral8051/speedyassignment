import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TopSongsChart = ({ data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Top 5 Streamed Songs</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="song" />
          <YAxis />

           {/*displaying stream values with commas */}
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
          <Bar dataKey="streams" fill="#8884d8" animationDuration={500} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopSongsChart;
