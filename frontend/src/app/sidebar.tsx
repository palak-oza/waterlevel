// import * as React from 'react';
// import { ListItem } from '@mui/material';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SensorsIcon from '@mui/icons-material/Sensors';
// export const SideList = (
//   <React.Fragment>
//     <ListItemButton onClick={() => { window.location.href = "/dashboard/charts"; }}>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//     <ListItemButton onClick={() => { window.location.href = "/dashboard/device"; }}>
//       <ListItemIcon>
//         <SensorsIcon />
//       </ListItemIcon>
//       <ListItemText primary="Devices" />
//     </ListItemButton>
//     <ListItemButton onClick={() => { window.location.href = "/dashboard/user"; }}>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Users" />
//     </ListItemButton>
//   </React.Fragment>
// );

import * as React from 'react';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SensorsIcon from '@mui/icons-material/Sensors';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
export const SideList = (
  <React.Fragment>
    {/* Top items */}
    <ListItemButton onClick={() => { window.location.href = "/dashboard/compts"; }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => { window.location.href = "/dashboard/device"; }}>
      <ListItemIcon>
        <SensorsIcon />
      </ListItemIcon>
      <ListItemText primary="Devices" />
    </ListItemButton>
    <ListItemButton onClick={() => { window.location.href = "/dashboard/user"; }}>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton onClick={() => { window.location.href = "/dashboard/reports"; }}>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Status & Report" />
    </ListItemButton>
    {/* Bottom items */}
    <div style={{ marginTop:'110%' }}>
    <ListItemButton onClick={() => { window.location.href = "/dashboard/help"; }}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Name" />
    </ListItemButton>
    <ListItemButton onClick={() => { window.location.href = "/dashboard/settings"; }}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    </div>
    
  </React.Fragment>
);


   
 