import React from 'react';
import Dashboard from './dashboard';
import Devices from './device';
import { Routes, Route } from 'react-router-dom';
import MyComponent from './filter';
import User from './user';
import Dashboard1 from './Dashcompts';
import BasicLineChart from './chart';
import PredictionComponent from './model';
//import DateChart from './charts';
//import DifferentLength from './charts';
//import UserDeviceReport from './reports';
//import DevicesList from './devicegetapi';
const App: React.FC = () => {
  return (
    <>
    {/* <PredictionComponent/> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="compts" element={<Dashboard1 />}/>
        <Route path="device" element={<Devices />}/>
        <Route  path="user" element={<User />}/>
        </Route>
      </Routes>
    </>
  );
};
export default App;
