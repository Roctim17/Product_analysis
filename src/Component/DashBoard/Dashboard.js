import AreaCharts from '../AreaChaets/AreaCharts';
import LineCharts from '../LineChart/LineChart';
import PieCharts from '../PieCharts/PieCharts';
import RadialBarCharts from '../RadiaBarCharts/RadiaBarCharts';
import './DashBoard.css'


const Dashboard = () => {


    return (
        <div className='dashboard-container'>
            <LineCharts></LineCharts>
            <PieCharts></PieCharts>
            <AreaCharts></AreaCharts>
            <RadialBarCharts></RadialBarCharts>
        </div>
    );
};

export default Dashboard;