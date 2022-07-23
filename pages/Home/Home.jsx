import styles from '../../styles/DashboardHome.module.css';
import Chart from '../../components/component/Chart/Chart';
import FeaturedInfo from '../../components/component/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../components/component/WidgetLg/WidgetLg';
import WidgetSm from '../../components/component/WidgetSm/WidgetSm';
import {userData} from '../DummyData'

function Home() {
    return (
        <div className={styles.home}>
            <FeaturedInfo  />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className={`${styles.homeWidgets}`}>
               <WidgetSm />
                <WidgetLg /> 
            </div>
        </div>
    )
}

export default Home;
