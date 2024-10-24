import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>

          <li><NavLink to="/">Leads</NavLink></li>
          <li><NavLink to="/analytics">Analytics</NavLink></li>
          <li><NavLink to="/reports">Reports</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
