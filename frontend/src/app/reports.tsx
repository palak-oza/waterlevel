// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button } from '@mui/material';
// import * as XLSX from 'xlsx';

// interface Column {
//     id: 'srno' | 'sensor_name' | 'distance_cm'| 'timestamp' | 'litre';
//     label: string;
//     minWidth?: number;
//     align?: 'center';
//     format?: (value: number) => string;
//   }
  
//   const columns: readonly Column[] = [
//     { id: 'srno', label: 'Sr.No.', minWidth: 170 },
//     { id: 'sensor_name', label: "Device Name", minWidth: 170 },
//     {id: 'distance_cm', label: "Distance_cm", minWidth: 170},
//     {
//       id: 'timestamp',
//       label: 'Timestamp',
//       minWidth: 170,
//     },
//     {id: 'litre', label: "Litres", minWidth: 170},
//   ];
  
//   interface IData {
//     srno: number;
//       sensor_name: string;
//       distance_cm: number;
//       timestamp: Date;
//       litre:number;
  
//   }

// const UserDeviceReport: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);

//   const generateReport = async () => {
//     setLoading(true);

//     try {
//       // Fetch data from API
//       const response = await axios.get('http://localhost:3000/api/sensor/all');
//       const userData = response.data;

//       // Extract litres and timestamps
//       const litresData = userData.map((item: any) => ({
//         litres: item.litre,
//         timestamp: item.timestamp
//       }));

//       // Find highest and lowest values of litres
//       const maxLitresData = Math.max(...litresData.map((item: any) => item.litre));
//       const minLitresData = Math.min(...litresData.map((item: any) => item.litre));

//       // Find timestamps for highest and lowest values
//       const maxLitresTimestamp = litresData.find((item: any) => item.litre === maxLitresData)?.timestamp;
//       const minLitresTimestamp = litresData.find((item: any) => item.litre === minLitresData)?.timestamp;

//       // Prepare data for Excel
//       const excelData = [
//         ['Timestamp', 'Litres'],
//         ...userData.map((item: any) => [item.timestamp, item.litre]),
//         ['Highest Litres', maxLitresData, maxLitresTimestamp],
//         ['Lowest Litres', minLitresData, minLitresTimestamp]
//       ];

//       // Create a new workbook
//       const workbook = XLSX.utils.book_new();
//       const worksheet = XLSX.utils.aoa_to_sheet(excelData);
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'User Device Report');

//       // Save the workbook as an Excel file
//       XLSX.writeFile(workbook, 'user_device_report.xlsx');

//       setLoading(false);
//     } catch (error) {
//       console.error('Error generating report:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={generateReport} disabled={loading}>
//         {loading ? 'Generating Report...' : 'Generate Report'}
//       </Button>
//     </div>
//   );
// };

// export default UserDeviceReport;

// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { Button } from '@mui/material';
// import * as XLSX from 'xlsx';
// import BasicLineChart from './chart'; // Import your chart component

// interface Column {
//   id: 'srno' | 'sensor_name' | 'distance_cm' | 'timestamp' | 'litre';
//   label: string;
//   minWidth?: number;
//   align?: 'center';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'srno', label: 'Sr.No.', minWidth: 170 },
//   { id: 'sensor_name', label: "Device Name", minWidth: 170 },
//   { id: 'distance_cm', label: "Distance_cm", minWidth: 170 },
//   { id: 'timestamp', label: 'Timestamp', minWidth: 170 },
//   { id: 'litre', label: "Litres", minWidth: 170 },
// ];

// interface IData {
//   srno: number;
//   sensor_name: string;
//   distance_cm: number;
//   timestamp: Date;
//   litre: number;
// }

// const UserDeviceReport: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const chartRef = useRef<HTMLCanvasElement | null>(null); // Specify the type of ref

//   const generateReport = async () => {
//     setLoading(true);

//     try {
//       // Fetch data from API
//       const response = await axios.get('http://localhost:3000/api/sensor/all');
//       const userData = response.data;

//       // Extract litres and timestamps
//       const litresData = userData.map((item: any) => ({
//         litres: item.litre,
//         timestamp: item.timestamp
//       }));

//       // Find highest and lowest values of litres
//       const maxLitresData = Math.max(...litresData.map((item: any) => item.litre));
//       const minLitresData = Math.min(...litresData.map((item: any) => item.litre));

//       // Find timestamps for highest and lowest values
//       const maxLitresTimestamp = litresData.find((item: any) => item.litre === maxLitresData)?.timestamp;
//       const minLitresTimestamp = litresData.find((item: any) => item.litre === minLitresData)?.timestamp;

//       // Prepare data for Excel
//       const excelData = [
//         ['Timestamp', 'Litres'],
//         ...userData.map((item: any) => [item.timestamp, item.litre]),
//         ['Highest Litres', maxLitresData, maxLitresTimestamp],
//         ['Lowest Litres', minLitresData, minLitresTimestamp]
//       ];

//       // Generate chart and get the image as base64
//       if (chartRef.current) {
//         const chartCanvas = chartRef.current.toDataURL('image/png');

//         // Create a new workbook
//         const workbook = XLSX.utils.book_new();

//         // Add data worksheet
//         const worksheetData = XLSX.utils.aoa_to_sheet(excelData);
//         XLSX.utils.book_append_sheet(workbook, worksheetData, 'User Device Data');

//         // Add chart as image
//         const worksheetChart = workbook.SheetNames[0]; // Assuming chart goes to the first sheet
//         const chartImage = XLSX.utils.decodeBase64(chartCanvas.split(',')[1]);
//         const chartImageSize = XLSX.utils.calculateImageSize(chartImage);
//         const chartImageRange = { '!cols': [{ wpx: chartImageSize.w }, { wpx: chartImageSize.h }] };
//         XLSX.utils.sheet_addImage(workbook.Sheets[worksheetChart], chartImage, chartImageRange);

//         // Save the workbook as an Excel file
//         XLSX.writeFile(workbook, 'user_device_report.xlsx');
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error('Error generating report:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={generateReport} disabled={loading}>
//         {loading ? 'Generating Report...' : 'Generate Report'}
//       </Button>
//       <BasicLineChart ref={chartRef} /> {/* Assuming your chart component supports refs */}
//     </div>
//   );
// };

// export default UserDeviceReport;

