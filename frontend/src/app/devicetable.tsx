// 


import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { format } from 'date-fns'; 

interface Column {
  id: 'srno' | 'sensor_name' | 'distance_cm'| 'timestamp' | 'litre'|'waterpercent'|'level';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'srno', label: 'Sr.No.', minWidth: 170 },
  { id: 'sensor_name', label: "Device Name", minWidth: 170 },
  {id: 'distance_cm', label: "Distance_cm", minWidth: 170},
  {
    id: 'timestamp',
    label: 'Timestamp',
    minWidth: 170,
  },
  {id: 'litre', label: "Litres", minWidth: 170},
  {id: 'waterpercent', label: "% of water", minWidth: 170},
  {id: 'level', label: "Water Level", minWidth: 170}
];

interface IData {
  srno: number;
    sensor_name: string;
    distance_cm: number;
    timestamp: Date;
    litre:number;
    waterpercent:number;
    level:string;

}
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState<IData[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IData[]>('http://localhost:3000/api/sensor/latest',
        { //withCredentials: true ,
      });
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.srno}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        // <TableCell key={column.id} align={column.align}>
                        //   {column.format && typeof value === 'number'
                        //     ? column.format(value)
                        //     : value}
                        // </TableCell>
                        <TableCell key={column.id} align={column.align}>
                          {typeof value === 'string' || typeof value === 'number' ? value : ''}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
