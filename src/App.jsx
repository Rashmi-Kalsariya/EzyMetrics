import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import Dashboard from './components/Dashboard';
import Leads from "./components/Leads";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="" element={<Leads />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
        {/* Default route */}
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
