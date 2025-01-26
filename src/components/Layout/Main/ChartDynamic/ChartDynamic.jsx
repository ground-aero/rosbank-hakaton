import { useContext, useState } from 'react'
import globalStyles from '../../../../globals.module.css'
import styles from './ChartDynamic.module.css'
import SkillsDynamic from './SkillsDynamic/SkillsDynamic';
import { AppContext } from '../../../../context/context'

function ChartDynamic() {
    const { teams, isTeamName, selectedEmployee} = useContext(AppContext);
    const [ activeTab, setActiveTab ] = useState('skillsDynamic');

 // console.log('isTeamName, teams', "selectedEmployee:", isTeamName, teams, selectedEmployee)

    return (
        <section id='chartDynamic' className={`${globalStyles.chart} ${styles.chartDynamic}`}>

            <div className={globalStyles.tabsChart}>

                {/* 1-st tab */}
                <div className={`${globalStyles.tabChart} ${activeTab === 'skillsDynamic' ? globalStyles.active : ''}`}
                     onClick={() => setActiveTab('skillsDynamic')}
                >
                    <p>Динамика развития навыков</p>
                </div>

                {/* 2-nd tab */}
                <div className={`${globalStyles.tabChart} ${activeTab === 'other' ? globalStyles.active : ''}`}
                     onClick={() => setActiveTab('other')}
                >
                    <p>Оценка сотрудников по должности и грейду</p>
                </div>
            </div>


            {/* sub-chart content */}
            <div className={globalStyles.tabContentChart}>

                {/*{ activeTab === 'skillsDynamic'*/}
                {/*    ? <p className={`${globalStyles.tableHeader}`}>*/}
                {/*        Средний балл*/}
                {/*      </p>*/}
                {/*    : ""*/}
                {/*}*/}

                <div className={globalStyles.scrollableContent}>
                    { activeTab === 'skillsDynamic' ? <SkillsDynamic/> : "" }
                </div>
            </div>

        </section>
    );
}

export default ChartDynamic;