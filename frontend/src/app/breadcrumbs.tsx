import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link, { LinkProps } from '@mui/material/Link';
import { ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

interface ListItemLinkProps extends ListItemProps {
  to: string;
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/device': 'Device',
  '/dashboard/user': 'User',
};

function ListItemLink(props: ListItemLinkProps) {
  const { to, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <Link component={RouterLink as any} to={to} {...other}>
      <ListItemButton selected={false}>
        <Typography color="text.primary">{primary}</Typography>
      </ListItemButton>
    </Link>
  );
}

interface LinkRouterProps extends LinkProps {
  to: string;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs separator=">" aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Routes>
        <Route path="*" element={<Page />} />
      </Routes>
      <Box
        sx={{
          bgcolor: 'background.paper',
          ml: 2,
        }}
        component="nav"
        aria-label="breadcrumb"
      >
        <List component="nav" aria-label="main mailbox folders" sx={{ display: 'flex' }}>
          {/* <ListItemLink to="/dashboard/device/devicetable" /> */}
        </List>
      </Box>
    </Box>
  );
}
