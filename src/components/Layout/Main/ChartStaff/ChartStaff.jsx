import { useState } from 'react'
import './ChartStaff.css'
import StaffJobFit from './StaffJobFit/StaffJobFit'
import StaffSkilledNum from './StaffSkilledNum/StaffSkilledNum'

function ChartStaff() {
    const [activeTab, setActiveTab] = useState('skillsLevel')

    return (
        <section id='chartStaff' className='chartStaff'>

            <div className="tabs-chart">
                <div className={`tab-chart ${activeTab === 'skillsLevel' ? 'active' : ''}`}
                     onClick={() => setActiveTab('skillsLevel')}>
                    <p>Соответствие должности</p>
                    {/*<span>Сотрудник: _ • Уровень владения навыками</span>*/}
                </div>

                <div className={`tab-chart ${activeTab === 'staffNums' ? 'active' : ''}`}
                        onClick={() => setActiveTab('staffNums')}>
                    Количество сотрудников, владеющих навыками
                </div>
            </div>

            <div className="tab-content-chart">
                <div className="scrollable-content">
                    {activeTab === 'skillsLevel' ? <StaffJobFit/> : <StaffSkilledNum/>}
                </div>
            </div>

        </section>
    );
}

export default ChartStaff;