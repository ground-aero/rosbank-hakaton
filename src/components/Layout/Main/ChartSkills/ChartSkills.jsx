import { useState } from 'react'
import './ChartSkills.css'
import SkillsLevel from "./SkillsLevel/SkillsLevel";
import SkillsPoints from "./SkillsPoints/SkillsPoints";

function ChartSkills() {
    const [activeTab, setActiveTab] = useState('skillsLevel')

    return (
        <section id='chartSkills' className='chartSkills'>

            <div className="tabs-chart">
                <div className={`tab-chart ${activeTab === 'skillsLevel' ? 'active' : ''}`}
                     onClick={() => setActiveTab('skillsLevel')}>
                    <p>Уровень владения навыками</p>
                    {/*<span>Сотрудник: _ • Уровень владения навыками</span>*/}
                </div>

                <div className={`tab-chart ${activeTab === 'staffNums' ? 'active' : ''}`}
                     onClick={() => setActiveTab('staffNums')}>
                    <p>Баллы сотрудников по навыкам</p>
                </div>
            </div>

            <div className="tab-content-chart">
                <div className="scrollable-content">
                    {activeTab === 'skillsLevel' ? <SkillsLevel/> : <SkillsPoints/>}
                </div>
            </div>

        </section>
    );
}

export default ChartSkills;