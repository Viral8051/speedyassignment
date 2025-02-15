import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const RevenueDistribution = ({ data, onClick }) => {
  //track the currently active slice in the pie chart
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Revenue Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
            onClick={(e) => {
              setActiveIndex(e.index);
              onClick(data[e.index].name); // Pass selected revenue source to parent
            }}
          >
            {/* mapping data to color */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              />
            ))}
          </Pie>
          {/* tooltip for hovering over slices */}
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`} // Formatting tooltip values with a currency
            contentStyle={{
              backgroundColor: "#333",
              borderRadius: "5px",
              padding: "5px",
              color: "#fff",
            }}
          />
          <Legend verticalAlign="top" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueDistribution;
