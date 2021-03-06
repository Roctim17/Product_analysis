import React from 'react';
import { Pie, PieChart } from 'recharts';
import useData from '../../hooks/useData/useData';
import './PieCharts.css'

const PieCharts = () => {
    const [data] = useData([]);
    return (
        <div className='pie-chart'>
            <h1>Investment vs Revenue</h1>
            <PieChart width={400} height={270}>
                <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey={"revenue"} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default PieCharts;