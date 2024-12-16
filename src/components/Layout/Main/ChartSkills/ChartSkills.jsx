import {useContext, useState} from 'react';
import globalStyles from '../../../../globals.module.css'
import styles from './ChartSkills.module.css';
import SkillsLevel from "./SkillsLevel/SkillsLevel";
import SkillsPoints from "./SkillsPoints/SkillsPoints";

function ChartSkills() {
    const [activeTab, setActiveTab] = useState('skillsLevel');

    return (
        <section id='chartSkills' className={`${globalStyles.chart} ${styles.chartSkills}`}>

            <div className={globalStyles.tabsChart}>

                {/* 1-st tab */}
                <div
                    className={`${globalStyles.tabChart} ${activeTab === 'skillsLevel' ? globalStyles.active : ''}`}
                    onClick={() => setActiveTab('skillsLevel')}
                >
                  <p>Уровень владения навыками</p>
                {activeTab === 'skillsLevel'
                    ?
                    <div className={globalStyles.chartSubtitles}>
                        <p className={globalStyles.chartSubtitle}>
                            [Воронка.img] •
                        </p>
                    </div>
                    :
                    <div className={globalStyles.chartSubtitles}>
                        <p className={`${globalStyles.chartSubtitle} ${activeTab !== 'skillsLevel' ? globalStyles.active : ""}`}>
                            Другое •
                        </p>
                    </div>
                }
                </div>


                {/* 2-nd tab */}
                <div
                    className={`${globalStyles.tabChart} ${activeTab === 'staffNums' ? globalStyles.active : ''}`}
                    onClick={() => setActiveTab('staffNums')}
                >
                    <p>Баллы сотрудников по навыкам</p>
                </div>
            </div>

            {/* 1-st sub-chart content */}
            <div className={globalStyles.tabContentChart}>
                <div className={globalStyles.scrollableContent}>
                    { activeTab === 'skillsLevel' ? <SkillsLevel/> : <SkillsPoints/>}
                </div>
            </div>

        </section>
    );
}

export default ChartSkills;