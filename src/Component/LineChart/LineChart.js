import React, { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <div className="">
            <LineChart width={600} height={300} data={data}>
                <Line dataKey={'sell'} />
                <XAxis dataKey={"month"} />
                <YAxis dataKey={'sell'} />

            </LineChart>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey={"revenue"} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>


    );
};

export default LineCharts;