import React from 'react';
import CustomShapeBarChart from '../Charts/CustomShapeBarChart';
import DomainRadarChart from '../Charts/DomainRadarChart';
import PercentAreaChart from '../Charts/PercentAreaChart'

const Dashboard = () => {
    return (
       <div style={{display: "flex", textAlign: "center", justifyContent: "center", width: "100%"}}>
            <div>
         <PercentAreaChart></PercentAreaChart>
         <DomainRadarChart></DomainRadarChart>
         <CustomShapeBarChart></CustomShapeBarChart>
        </div>
       </div>
    );
};

export default Dashboard;