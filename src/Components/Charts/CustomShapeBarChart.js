import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from './ChartsData';


const CustomShapeBarChart = () => {
    return (

      <div>
             <h1 style={{textAlign: "center", fontWeight: "400", fontSize: "19px", marginLeft: "70px", color: "#AAE4D5", marginTop: "80px"}}>
                Differences between sales, benefits, investments as per Bar Chart
            </h1>
            <ComposedChart style={{marginLeft: "55px"}}
          width={700}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Sell" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="Investment" barSize={20}   fill="#82ca9d" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="Benefits" fill="red" />
        </ComposedChart>
      </div>
      );
};

export default CustomShapeBarChart;