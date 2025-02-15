import React from "react";

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* creating loop through the metrics and display */}
      {Object.entries(metrics).map(([key, value]) => {
        console.log(`Rendering metric: ${key} with value: ${value}`);  //rendered metric
        return(
        <div key={key} className="card p-6 hover:bg-gray-700 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold capitalize mb-2">{key.replace(/([A-Z])/g, " $1")}</h2>
          <p className="text-3xl font-bold text-blue-500">{value.toLocaleString()}</p>
        </div>
        );
      })}
    </div>
  );
};

export default KeyMetrics;
