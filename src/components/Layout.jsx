import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Outlet /> {/* This renders the component based on the current route */}
      </main>
    </div>
  );
};

export default Layout;
