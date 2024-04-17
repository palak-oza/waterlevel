import Grid from "@material-ui/core/Grid";
import BasicLineChart from './chart';
import React from "react";
import { Box } from "@mui/material";
import GaugeComponent from './components/ohgauge';
import GaugeComponentl from './components/lhgauge';
import { useTranslation } from "react-i18next";
import OverviewWidget from "./components/overview";
// import AdminAppBar from "../components/AdminAppBar";
// import AdminToolbar from "../components/AdminToolbar";
// import ActivityWidget from "../widgets/ActivityWidget";

// import CircleProgressWidget from "../widgets/CircleProgressWidget";
// import OverviewWidget from "../widgets/OverviewWidget";

// import TeamProgressWidget from "../widgets/TeamProgressWidget";
import StickyHeadTable from "./devicetable";
const overviewItems = [
  {
    unit: "Devices",
    value: "38",
  },
 
];

const Dashboard1 = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      
      <Grid container spacing={2} >
        <Grid item xs={12} md={8}>
          <Box sx={{pl:2}}>
          <BasicLineChart/>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} >
          <Grid container spacing={2}>
            {overviewItems.map((item, index) => (
              <Grid key={index} item xs={5}>
                <OverviewWidget description={t(item.unit)} title={item.value} />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} style={{ marginTop: 2}} >
              <GaugeComponent/>
            
          </Grid>
        </Grid>

        <Grid item xs={8}>
         <StickyHeadTable/>
        </Grid>

        <Grid item xs={12} md={4}>
        <GaugeComponentl/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard1;

