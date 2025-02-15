import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [sortBy, setSortBy] = useState("date");
  const [filter, setFilter] = useState({ song: "", artist: "" });

  // Sorting
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date); // sorting by most recent date
    }
    if (sortBy === "streams") {
      return b.streams - a.streams; // sorting by stream count
    }
    return 0;
  });

  // filter
  const filteredData = sortedData.filter((item) => {
    const songMatch = item.song.toLowerCase().includes(filter.song.toLowerCase());
    const artistMatch = item.artist.toLowerCase().includes(filter.artist.toLowerCase());
    if (!songMatch) console.log(`Filtering: No match found for song '${filter.song}'`);
    if (!artistMatch) console.log(`Filtering: No match found for artist '${filter.artist}'`);
    return songMatch && artistMatch;
  });

  return (
    <div className="overflow-x-auto mb-8">
      {/* Filter Inputs */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="p-2 rounded bg-gray-700 text-white"
          placeholder="Filter by Song Name"
          value={filter.song}
          onChange={(e) => setFilter({ ...filter, song: e.target.value })}
        />
        <input
          type="text"
          className="p-2 rounded bg-gray-700 text-white"
          placeholder="Filter by Artist"
          value={filter.artist}
          onChange={(e) => setFilter({ ...filter, artist: e.target.value })}
        />

        {/* Dropdown */}
      <div className="">
        <label className="mr-4">Sort by:</label>
        <select
          className="p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="date">Date Streamed</option>
          <option value="streams">Stream Count</option>
        </select>
      </div>
      </div>

      

      {/* Table */}
      <table className="min-w-full table-auto rounded-lg">
        <thead className="bg-[#181818]">
          <tr>
            <th className="py-2 px-4">Song Name</th>
            <th className="py-2 px-4">Artist</th>
            <th className="py-2 px-4">Date Streamed</th>
            <th className="py-2 px-4">Stream Count</th>
            <th className="py-2 px-4">User ID</th>
          </tr>
        </thead>
        <tbody className="bg-[#181818]">
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-700 ">
              <td className="py-2 px-4">{row.song}</td>
              <td className="py-2 px-4">{row.artist}</td>
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.streams}</td>
              <td className="py-2 px-4">{row.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
