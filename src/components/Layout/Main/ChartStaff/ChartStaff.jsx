import { useState } from 'react';
import styles from './ChartStaff.module.css';
import StaffJobFit from './StaffJobFit/StaffJobFit';
import StaffSkilledNum from './StaffSkilledNum/StaffSkilledNum';

function ChartStaff() {
    const [activeTab, setActiveTab] = useState('skillsLevel');

    return (
        <section id='chartStaff' className={styles.chartStaff}>

            <div className={styles.tabsChart}>
                <div
                    className={`${styles.tabChart} ${activeTab === 'skillsLevel' ? styles.active : ''}`}
                    onClick={() => setActiveTab('skillsLevel')}
                >
                    <p>Соответствие должности</p>
                </div>

                <div
                    className={`${styles.tabChart} ${activeTab === 'staffNums' ? styles.active : ''}`}
                    onClick={() => setActiveTab('staffNums')}
                >
                    Количество сотрудников, владеющих навыками
                </div>
            </div>

            <div className={styles.tabContentChart}>
                <div className={styles.scrollableContent}>
                    {activeTab === 'skillsLevel' ? <StaffJobFit /> : <StaffSkilledNum />}
                </div>
            </div>

        </section>
    );
}

export default ChartStaff;