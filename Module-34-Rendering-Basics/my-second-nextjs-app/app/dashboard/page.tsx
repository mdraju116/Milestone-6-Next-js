
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log("Dashboard Rendered."); //server-side

    return (
        <div className='text-center'>

            <h2>This is dashboard</h2>

            <Counter></Counter>
        </div>
    );
};

export default DashboardPage;