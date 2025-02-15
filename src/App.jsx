import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"; // Import Routes and Link for navigation
import { DashboardProvider } from "./components/DashboardContext";
import Dashboard from "./components/Dashboard";




const App = () => {
  return (
    <Router>
      <DashboardProvider>
        <Dashboard/>
      </DashboardProvider>
    </Router>
  );
};

export default App;
