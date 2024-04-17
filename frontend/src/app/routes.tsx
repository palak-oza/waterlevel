import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import User from './user';
import Devices from './device';
// import ReportsPage from './ReportsPage';
// import HelpPage from './HelpPage';
// import SettingsPage from './SettingsPage';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/user" element={<User />} />
      <Route path="/devices" element={<Devices />} />
      {/* <Route path="/reports" element={<ReportsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/settings" element={<SettingsPage />} /> */}
    </ReactRoutes>
  );
};
