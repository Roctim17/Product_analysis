import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import useData from '../../hooks/useData/useData';

const RadialBarCharts = () => {
    const [data] = useData([]);
    return (
        <div>
            <h1>Sell</h1>
            <RadialBarChart
                width={500}
                height={300}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#fff', position: 'insideStart' }} background clockWise={true} dataKey='sell' />
                <Legend iconSize={10} width={140} height={280} layout='vertical' verticalAlign='middle' align="right" dataKey='investment' />
                <Tooltip />
            </RadialBarChart>
        </div>
    );
};

export default RadialBarCharts;
