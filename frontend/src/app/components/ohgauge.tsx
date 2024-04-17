import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Gauge } from '@mui/x-charts/Gauge';
import { Card, CardContent , Typography } from '@mui/material';

const GaugeComponent = () => {
  const [waterPercent, setWaterPercent] = useState(null);
  const [litre, setLitre] = useState(null);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/sensor/percentoh')
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Ensure data exists before destructure
          const { waterpercent,level,litre } = response.data[0];

          setWaterPercent(waterpercent);
          setLitre(litre);
          setLevel(level);
        } else {
          console.error('Invalid response format or empty data');
        }
      })
      .catch(error => {
        console.error('Error fetching single value:', error);
      });
  }, []);

  return (
    <Card sx={{ p: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Level: <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>{level}</Typography>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Litre: <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>{litre}</Typography>
      </Typography>
    </CardContent>
    <div style={{ height: '240px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {waterPercent !== null ? (
        <Gauge height={200} value={waterPercent} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </Card>
  );
};

export default GaugeComponent;
