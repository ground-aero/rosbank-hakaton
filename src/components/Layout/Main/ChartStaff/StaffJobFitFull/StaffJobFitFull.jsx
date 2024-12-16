import styles from './StaffJobFitFull.module.css';
import BarChart from "../../../../Charts/BarChart";

function StaffJobFitFull() {

    return (
        <div>
            <p className={styles.chartSubtitle}>
                НА ВСЮ СТРАНИЦУ ТАБЛИЦА: 1. Сотрудник, 2. Доля навыков...
            </p>

            <BarChart />

        </div>
    );
}

export default StaffJobFitFull;