
import React, { createContext, useContext, useState, useEffect,useMemo} from "react";

const DashboardContext = createContext();

//Provider for sharing dash data 
export const DashboardProvider = ({ children }) => {
  const [keyMetrics, setKeyMetrics] = useState({});
  const [userGrowthData, setUserGrowthData] = useState([]);
  const [revenueDistributionData, setRevenueDistributionData] = useState([]);
  const [topSongsData, setTopSongsData] = useState([]);

  //mock data for streams 
  const recentStreamsData =useMemo(()=> [
    { "song": "Shape of You", "streams": 10250, "artist": "Ed Sheeran", "date": "2024-01-01", "userId": "U001" },
    { "song": "Blinding Lights", "streams": 9850, "artist": "The Weeknd", "date": "2024-01-02", "userId": "U002" },
    { "song": "Stay", "streams": 9600, "artist": "The Kid LAROI", "date": "2024-01-03", "userId": "U003" },
    { "song": "Levitating", "streams": 9400, "artist": "Dua Lipa", "date": "2024-01-04", "userId": "U004" },
    { "song": "Peaches", "streams": 9200, "artist": "Justin Bieber", "date": "2024-01-05", "userId": "U005" },
    { "song": "Good 4 U", "streams": 9100, "artist": "Olivia Rodrigo", "date": "2024-01-06", "userId": "U006" },
    { "song": "Montero", "streams": 8900, "artist": "Lil Nas X", "date": "2024-01-07", "userId": "U007" },
    { "song": "Drivers License", "streams": 8700, "artist": "Olivia Rodrigo", "date": "2024-01-08", "userId": "U008" },
    { "song": "Butter", "streams": 8500, "artist": "BTS", "date": "2024-01-09", "userId": "U009" },
    { "song": "Happier Than Ever", "streams": 8300, "artist": "Billie Eilish", "date": "2024-01-10", "userId": "U010" },
    { "song": "Easy On Me", "streams": 8100, "artist": "Adele", "date": "2024-01-11", "userId": "U011" },
    { "song": "Shivers", "streams": 7900, "artist": "Ed Sheeran", "date": "2024-01-12", "userId": "U012" },
    { "song": "Cold Heart", "streams": 7700, "artist": "Elton John", "date": "2024-01-13", "userId": "U013" },
    { "song": "Bad Habits", "streams": 7500, "artist": "Ed Sheeran", "date": "2024-01-14", "userId": "U014" },
    { "song": "Someone You Loved", "streams": 7300, "artist": "Lewis Capaldi", "date": "2024-01-15", "userId": "U015" },
    { "song": "Sunflower", "streams": 7100, "artist": "Post Malone", "date": "2024-01-16", "userId": "U016" },
    { "song": "Roses", "streams": 6900, "artist": "SAINt JHN", "date": "2024-01-17", "userId": "U017" },
    { "song": "Watermelon Sugar", "streams": 6700, "artist": "Harry Styles", "date": "2024-01-18", "userId": "U018" },
    { "song": "Circles", "streams": 6500, "artist": "Post Malone", "date": "2024-01-19", "userId": "U019" },
    { "song": "The Box", "streams": 6300, "artist": "Roddy Ricch", "date": "2024-01-20", "userId": "U020" },
    { "song": "Rockstar", "streams": 6100, "artist": "DaBaby", "date": "2024-01-21", "userId": "U021" },
    { "song": "Dance Monkey", "streams": 5900, "artist": "Tones and I", "date": "2024-01-22", "userId": "U022" },
    { "song": "Senorita", "streams": 5700, "artist": "Shawn Mendes", "date": "2024-01-23", "userId": "U023" },
    { "song": "Memories", "streams": 5500, "artist": "Maroon 5", "date": "2024-01-24", "userId": "U024" },
    { "song": "Goosebumps", "streams": 5300, "artist": "Travis Scott", "date": "2024-01-25", "userId": "U025" },
    { "song": "Mood", "streams": 5100, "artist": "24kGoldn", "date": "2024-01-26", "userId": "U026" },
    { "song": "Savage Love", "streams": 4900, "artist": "Jason Derulo", "date": "2024-01-27", "userId": "U027" },
    { "song": "No Time to Die", "streams": 4700, "artist": "Billie Eilish", "date": "2024-01-28", "userId": "U028" },
    { "song": "Deja Vu", "streams": 4500, "artist": "Olivia Rodrigo", "date": "2024-01-29", "userId": "U029" },
    { "song": "Heat Waves", "streams": 4300, "artist": "Glass Animals", "date": "2024-01-30", "userId": "U030" },
    { "song": "Without Me", "streams": 4100, "artist": "Halsey", "date": "2024-01-31", "userId": "U031" },
    { "song": "Circles", "streams": 3900, "artist": "Post Malone", "date": "2024-02-01", "userId": "U032" },
    { "song": "Dynamite", "streams": 3700, "artist": "BTS", "date": "2024-02-02", "userId": "U033" },
    { "song": "Truth Hurts", "streams": 3500, "artist": "Lizzo", "date": "2024-02-03", "userId": "U034" },
    { "song": "Lucid Dreams", "streams": 3300, "artist": "Juice WRLD", "date": "2024-02-04", "userId": "U035" },
    { "song": "Bad Guy", "streams": 3100, "artist": "Billie Eilish", "date": "2024-02-05", "userId": "U036" },
    { "song": "In the End", "streams": 2900, "artist": "Linkin Park", "date": "2024-02-06", "userId": "U037" },
    { "song": "Stressed Out", "streams": 2700, "artist": "Twenty One Pilots", "date": "2024-02-07", "userId": "U038" },
    { "song": "Sicko Mode", "streams": 2500, "artist": "Travis Scott", "date": "2024-02-08", "userId": "U039" },
    { "song": "God's Plan", "streams": 2300, "artist": "Drake", "date": "2024-02-09", "userId": "U040" },
    { "song": "Supalonely", "streams": 2100, "artist": "BENEE", "date": "2024-02-10", "userId": "U041" },
    { "song": "Old Town Road", "streams": 1900, "artist": "Lil Nas X", "date": "2024-02-11", "userId": "U042" },
    { "song": "Lose Yourself", "streams": 1700, "artist": "Eminem", "date": "2024-02-12", "userId": "U043" }
  ],[]);

  useEffect(() => {
    // If there's no recent streams data, we don't need to process anything
    if (recentStreamsData.length === 0) {
      console.log("No recent stream data found. Skipping calculations...");
      return;
    };


    //calculations of total streams 
    const totalStreams = recentStreamsData.reduce((acc, song) => acc + song.streams, 0);
    const uniqueUsers = new Set(recentStreamsData.map((data) => data.userId)).size;


    //top artist search
    const topArtist = recentStreamsData.reduce((acc, song) => {
      acc[song.artist] = (acc[song.artist] || 0) + song.streams;
      return acc;
    }, {});

    const topArtistName = Object.keys(topArtist).reduce((a, b) =>
      topArtist[a] > topArtist[b] ? a : b
    );


    //Keymetrics based on total stream and artists
    setKeyMetrics({
      totalUsers: uniqueUsers,
      activeUsers: Math.round(uniqueUsers * 0.6),
      totalStreams: totalStreams,
      revenue: totalStreams * 0.05, // Example: $0.05 per stream
      topArtist: topArtistName,
    });

    // Top songs based on total streams 
    const songStreams = recentStreamsData.reduce((acc, song) => {
      acc[song.song] = (acc[song.song] || 0) + song.streams;
      return acc;
    }, {});

    const topSongs = Object.entries(songStreams)
      .map(([song, streams]) => ({ song, streams }))
      .sort((a, b) => b.streams - a.streams) // Sort songs by the most streams
      .slice(0, 5); // Get top 5 songs


    console.log("Top 5 Songs: ", topSongs); 
    setTopSongsData(topSongs);

    // Finding revenue by spliting data between subscription and ads
    setRevenueDistributionData([
      { name: "Subscriptions", value: totalStreams * 0.03 },
      { name: "Ads", value: totalStreams * 0.02 },
    ]);

    // create mock data for user growth
    setUserGrowthData([
      { month: "Jan", total: uniqueUsers - 1000, active: Math.round((uniqueUsers - 1000) * 0.6) },
      { month: "Feb", total: uniqueUsers - 500, active: Math.round((uniqueUsers - 500) * 0.6) },
      { month: "Mar", total: uniqueUsers, active: Math.round(uniqueUsers * 0.6) },
    ]);

    console.log("User Growth Data: ", userGrowthData);
  }, []); //  if "recentStreamsData" is available then this will works 

  return (
    <DashboardContext.Provider
      value={{
        keyMetrics,
        userGrowthData,
        revenueDistributionData,
        topSongsData,
        recentStreamsData,
      }}
    >
      {children}   {/* Rendering children data */}
    </DashboardContext.Provider>
  );
};

// hook to use the data of dashboard
export const useDashboard = () => useContext(DashboardContext);
