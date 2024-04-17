// // import * as React from 'react';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';
// // import axios from 'axios';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditIcon from '@mui/icons-material/Edit';
// // import { Button } from '@mui/material';

// // interface Column {
// //   id: 'user_id' | 'name' | 'email'| 'phone' | 'zip_code';
// //   label: string;
// //   minWidth?: number;
// //   align?: 'center';
// //   format?: (value: number) => string;
// // }

// // const columns: readonly Column[] = [
// //   { id: 'user_id', label: 'Sr.No.', minWidth: 170 },
// //   { id: 'name', label: "User Name", minWidth: 170 },
// //   {id: 'email', label: "Email ID", minWidth: 170},
// //   {
// //     id: 'phone',
// //     label: 'Phone No.',
// //     minWidth: 170,
// //   },
// //   {id: 'zip_code', label: "Zip_code", minWidth: 170},
// // ];

// // interface IData {
// //     user_id: number;
// //     name: string;
// //     email: string;
// //     phone: string;
// //     zip_code: string;

// // }
// // export default function User() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);
// //   const [data, setData] = React.useState<IData[]>([]);

// //   React.useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get<IData[]>('http://localhost:3000/api/user/getuser',
// //         { //withCredentials: true ,
// //       });
// //         setData(response.data);

// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };
// //     fetchData();
// //   }, []);
// //   const handleChangePage = (event: unknown, newPage: number) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   const handleButtonClick=()=>{


// //   }

  
// //   return (
// //     <>
// //    <Button sx={{p:1,m:1}} 
// //     variant="contained">Add User</Button>
// //     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
// //       {/* <TableContainer sx={{ maxHeight: 550 }}> */}
// //         <Table >
// //           <TableHead>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {data
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow hover role="checkbox" tabIndex={-1} key={row.user_id}>
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align={column.align}>
// //                           {column.format && typeof value === 'number'
// //                             ? column.format(value)
// //                             : value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                     <TableCell align={'center'}>
// //                     <EditIcon sx={{ color: 'primary.dark' }} />
// //                     <DeleteIcon sx={{ color: 'red' }} />
// //                     </TableCell>
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       {/* </TableContainer> */}
// //       <TablePagination
// //         rowsPerPageOptions={[5, 10]}
// //         component="div"
// //         count={data.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //     </>
// //   );
// // }

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';

// interface Column {
//   id: 'user_id' | 'name' | 'email' | 'phone' | 'zip_code' | 'role';
//   label: string;
//   minWidth?: number;
//   align?: 'center';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'user_id', label: 'Sr.No.', minWidth: 170 },
//   { id: 'name', label: "User Name", minWidth: 170 },
//   { id: 'email', label: "Email ID", minWidth: 170 },
//   { id: 'phone', label: 'Phone No.', minWidth: 170 },
//   { id: 'zip_code', label: "Zip_code", minWidth: 170 },
//   { id: 'role', label: 'Role', minWidth: 170 },
// ];

// interface IData {
//   user_id: number;
//   name: string;
//   email: string;
//   phone: string;
//   zip_code: string;
//   role: string;
// }

// export default function User() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [data, setData] = React.useState<IData[]>([]);
//   const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', zip_code: '', role: 'user' });

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<IData[]>('http://localhost:3000/api/user/getuser');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRoleChange = (event: SelectChangeEvent<string>) => {
//     setFormData({ ...formData, role: event.target.value });
//   };

//   const handleFormSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3000/api/user/adduser', formData);
//       // Refresh data after adding the user
//       const response = await axios.get<IData[]>('http://localhost:3000/api/user/getuser');
//       setData(response.data);
//       handleClose();
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   return (
//     <>
//       <Button sx={{ p: 1, m: 1 }} variant="contained" onClick={handleOpen}>Add User</Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             name="name"
//             label="Name"
//             fullWidth
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             id="email"
//             name="email"
//             label="Email"
//             fullWidth
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             id="phone"
//             name="phone"
//             label="Phone"
//             fullWidth
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             id="zip_code"
//             name="zip_code"
//             label="Zip Code"
//             fullWidth
//             value={formData.zip_code}
//             onChange={handleInputChange}
//           />
//           <Select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleRoleChange}
//             fullWidth
//             label="Role"
//           >
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </Select>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleFormSubmit}>Add</Button>
//         </DialogActions>
//       </Dialog>
//       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.user_id}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                     <TableCell align={'center'}>
//                       <EditIcon sx={{ color: 'primary.dark' }} />
//                       <DeleteIcon sx={{ color: 'red' }} />
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10]}
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// }



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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Column {
  id: 'user_id' | 'name' | 'email' | 'phone' | 'zip_code' | 'role';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'user_id', label: 'Sr.No.', minWidth: 170 },
  { id: 'name', label: "User Name", minWidth: 170 },
  { id: 'email', label: "Email ID", minWidth: 170 },
  { id: 'phone', label: 'Phone No.', minWidth: 170 },
  { id: 'zip_code', label: "Zip_code", minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 170 },
];

interface IUser {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  zip_code: string;
  role: string;
}

export default function User() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState<IUser[]>([]);
  const [open, setOpen] = React.useState(false);
  const [editFormData, setEditFormData] = React.useState({ user_id: 0, name: '', email: '', phone: '', zip_code: '', role: 'user' });

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<IUser[]>('http://localhost:3000/api/user/getuser');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenEditForm = (user: IUser) => {
    setEditFormData(user);
    setOpen(true);
  };

  const handleCloseEditForm = () => {
    setOpen(false);
  };

  const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setEditFormData({ ...editFormData, role: event.target.value });
  };

  const handleEditFormSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/user/updateuser/${editFormData.user_id}`, editFormData);
      fetchData();
      handleCloseEditForm();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <Button sx={{ p: 1, m: 1 }} variant="contained">Add User</Button>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Table>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.user_id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align={'center'}>
                      <EditIcon sx={{ color: 'primary.dark', cursor: 'pointer' }} onClick={() => handleOpenEditForm(row)} />
                      <DeleteIcon sx={{ color: 'red', cursor: 'pointer' }} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
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

      <Dialog open={open} onClose={handleCloseEditForm}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            fullWidth
            value={editFormData.name}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={editFormData.email}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            value={editFormData.phone}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            id="zip_code"
            name="zip_code"
            label="Zip Code"
            fullWidth
            value={editFormData.zip_code}
            onChange={handleEditInputChange}
          />
          <Select
            id="role"
            name="role"
            value={editFormData.role}
            onChange={handleRoleChange}
            fullWidth
            label="Role"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditForm}>Cancel</Button>
          <Button onClick={handleEditFormSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
