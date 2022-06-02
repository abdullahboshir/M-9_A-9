import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from './ChartsData';

const percentAreaChart = () => {

    return (
        <div>
            <h1 style={{textAlign: "center", fontWeight: "400", marginLeft: "80px", fontSize: "19px", color: "#AAE4D5"}}>
                Differences between sales, benefits, investments as per area chart
            </h1>
            <AreaChart style={{marginLeft: "75px"}}
                width={700}
                height={280}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month"  />
                <YAxis/>
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Sell"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
                <Area
                    type="monotone"
                    dataKey="Benefits"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                />
                <Area
                    type="monotone"
                    dataKey="Investment"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#f9ac5e"
                />
            </AreaChart>
        </div>
    );
};

export default percentAreaChart;