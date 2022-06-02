import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import { data } from './ChartsData';

const DomainRadarChart = () => {
    return (
       <div>
            <h1 style={{textAlign: "center", fontWeight: "400", marginLeft: "55px", fontSize: "19px", color: "#AAE4D5", marginTop: "80px"}}>
                Differences between sales, benefits, investments as per Radar Chart
            </h1>

            <RadarChart cx={400} cy={210} outerRadius={200} width={800} height={440} data={data}>
             <Tooltip />
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Sell" dataKey="Sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Investment" dataKey="Investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Radar name="Benefits" dataKey="Benefits" stroke="#82ca9d"  fill="#f9ac5e" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
       </div>
      );
};

export default DomainRadarChart;