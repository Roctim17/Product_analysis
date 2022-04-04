import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData/useData';

const LineCharts = () => {
    const [data] = useData([]);

    return (

        <div className="">
            <LineChart width={600} height={300} data={data}>
                <Line dataKey={'sell'} />
                <XAxis dataKey={"month"} />
                <YAxis dataKey={'sell'} />

            </LineChart>

        </div>


    );
};

export default LineCharts;