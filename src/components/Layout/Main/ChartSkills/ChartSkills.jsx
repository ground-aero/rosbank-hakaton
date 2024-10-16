import { useState } from 'react';
import styles from './ChartSkills.module.css';
import SkillsLevel from "./SkillsLevel/SkillsLevel";
import SkillsPoints from "./SkillsPoints/SkillsPoints";

function ChartSkills() {
    const [activeTab, setActiveTab] = useState('skillsLevel');

    return (
        <section id='chartSkills' className={styles.chartSkills}>

            <div className={styles.tabsChart}>
                <div
                    className={`${styles.tabChart} ${activeTab === 'skillsLevel' ? styles.active : ''}`}
                    onClick={() => setActiveTab('skillsLevel')}
                >
                    <p>Уровень владения навыками</p>
                </div>

                <div
                    className={`${styles.tabChart} ${activeTab === 'staffNums' ? styles.active : ''}`}
                    onClick={() => setActiveTab('staffNums')}
                >
                    <p>Баллы сотрудников по навыкам</p>
                </div>
            </div>

            <div className={styles.tabContentChart}>
                <div className={styles.scrollableContent}>
                    {activeTab === 'skillsLevel' ? <SkillsLevel /> : <SkillsPoints />}
                </div>
            </div>

        </section>
    );
}

export default ChartSkills;