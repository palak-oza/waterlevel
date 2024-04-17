import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, TextField } from '@mui/material';
import { LineChart, axisClasses, chartsGridClasses } from '@mui/x-charts';
import { useTheme } from '@mui/material/styles';
import { timeStamp } from 'console';
interface IData {
    timestamp: Date;
    litre: number;
}

export default function BasicLineChart() {
    const theme = useTheme();
    const [data, setData] = useState<IData[]>([]);
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState<string>(''); // State for start date
    const [endDate, setEndDate] = useState<string>(''); // State for end date
    const navigate = useNavigate();
    const location = useLocation();

    // Function to fetch data from the API based on URL parameters
    const fetchData = async (start: string, end: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/sensor?startDate=${start}&endDate=${end}`);
            let responseData = Array.isArray(response.data) ? response.data : [response.data];
            // Convert the timestamp strings to Date objects in the array
            responseData = responseData.map(item => ({
                timestamp: new Date(item.timestamp),
                litre: item.litre
            }));
            console.log(responseData)
            // Update the state with the converted array
            setData(responseData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        
    };

    function getTomorrowDate(): string {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const year = tomorrow.getFullYear();
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const day = String(tomorrow.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    function getDateTenDaysBefore(): string {
    const today = new Date();
    today.setDate(today.getDate() - 10);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

    useEffect(() => {
        // Fetch default data when the component mounts
        const defaultStartDate = getDateTenDaysBefore();
        const defaultEndDate = getTomorrowDate();
        fetchData(defaultStartDate, defaultEndDate);
    }, []);


    // Function to fetch new data when button is clicked
    const handleButtonClick = async () => {
        // Update URL with selected dates
        navigate(`?startDate=${startDate}&endDate=${endDate}`);

        // Fetch new data
        await fetchData(startDate, endDate);
    };
    
    const timeValues: number[] = data.map(item => item.timestamp.getHours());
    console.log(timeValues)
    return (
        <Card sx={{width: 600,height:400,pr:2}}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Box>
                    <TextField sx={{m:2}}
                        id="start-date"
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField sx={{m:2}}
                        id="end-date"
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button sx={{mt:2.5}}
                    variant="contained" onClick={handleButtonClick}>Generate Chart</Button>
                    <Box >
                    <div style={{  overflow: 'hidden' }}>
                        {data.length > 0 && (
                            <LineChart
                            // xAxis={[{ data: timeValues, scaleType: 'utc' }]}
                            xAxis={[ {data: timeValues, scaleType: 'band',label:'DATE'}]}
                            series={[{ data: data.map((item) => item.litre) }]}
                            width={700}
                            height={300}
                            // sx={{p:2}}
                            sx={{
                                [`& .${axisClasses.left} .${axisClasses.label}`]: {
                                  transform: 'translateX(-10px)',
                                },
                                [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
                              }}
                            // padding={{ left: 50, right: 20, top: 20, bottom: 20 }} // Adjust left padding
                        />
                        
                        )}
                    </div>
                    </Box>
                </Box>
            )}
            {/* <GaugeComponent/>
            <GaugeComponentl/> */}
            <Outlet />
        </Card>
    );
}





