import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData/useData';
import './LineCharts.css'

const LineCharts = () => {
    const [data] = useData([]);

    return (

        <div className="line-chart">
            <LineChart width={650} height={350} data={data}>
                <Line dataKey={'sell'} />
                <XAxis dataKey={"month"} />
                <YAxis dataKey={'sell'} />

            </LineChart>

        </div>


    );
};

export default LineCharts;