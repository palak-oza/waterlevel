import { Outlet } from 'react-router-dom';
import StickyHeadTable from './devicetable';
export default function Devices() {
  return (
    <>
      <h3>DEVICES</h3>
      <StickyHeadTable/>
      <Outlet />
    </>
  )
}