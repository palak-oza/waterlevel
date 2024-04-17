//Gauge component upper head
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Gauge } from '@mui/x-charts/Gauge';

const GaugeComponentl = () => {
  const [waterPercent, setWaterPercent] = useState(null); // State to store the water percent value

  useEffect(() => {
    // Fetch the single value from the API endpoint
    axios.get('http://localhost:3000/api/sensor/percentlh')
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const { waterpercent } = response.data[0]; // Extract the value of "waterpercent"
          setWaterPercent(waterpercent); // Update the state with the water percent value
        } else {
          console.error('Invalid response format or empty data');
        }
      })
      .catch(error => {
        console.error('Error fetching single value:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div>
      {waterPercent !== null ? (
        <Gauge height={240} value={waterPercent} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GaugeComponentl;


//Gauge component lower head