import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData/useData';
import './LineCharts.css'

const LineCharts = () => {
    const [data] = useData([]);

    return (

        <div className="line-chart">
            <h1>Month vs Sell</h1>
            <LineChart width={500} height={300} data={data}>
                <Line dataKey={'sell'} />
                <XAxis dataKey={"month"} />
                <YAxis dataKey={'sell'} />

            </LineChart>

        </div>


    );
};

export default LineCharts;