import {useContext, useState} from 'react'
import globalStyles from '../../../../globals.module.css'
import styles from './ChartShares.module.css'
import { AppContext } from '../../../../context/context'
import SharesPositions from "./SharesPositions/SharesPositions"

function ChartShares() {
    const [activeTab, setActiveTab] = useState('staffPositions');

    return (
        <section id='chartShares' className={`${globalStyles.chart} ${styles.chartShares}`}>

            <div className={globalStyles.tabsChart}>

                {/* 1-st tab */}
                <div
                    className={`${globalStyles.tabChart} ${activeTab === 'staffPositions' ? globalStyles.active : ""}`}
                    onClick={() => setActiveTab('staffPositions')}
                >
                    <p>Должности сотрудников</p>
                    { activeTab === 'staffPositions'
                        ?
                        <div className={globalStyles.chartSubtitles}>
                            <p className={globalStyles.chartSubtitle}>
                                Должность •
                            </p>
                        </div>
                        :
                        <div className={globalStyles.chartSubtitles}>
                            <p className={`${globalStyles.chartSubtitle} ${activeTab !== 'staffPositions' ? globalStyles.active : ""}`}>
                                Другое •
                            </p>
                        </div>
                    }
                </div>


                {/* 2-nd tab */}
                <div
                    className={`${globalStyles.tabChart} ${activeTab === 'staffGradesNum' ? globalStyles.active : ''}`}
                    onClick={() => setActiveTab('staffGradesNum')}
                >
                    <p>Количество сотрудников по грейдам</p>
                </div>
            </div>

            {/* 1-st sub-chart content */}
            <div className={globalStyles.tabContentChart}>

                <div>
                    { activeTab === 'staffPositions' ? <SharesPositions/> : ""}
                </div>

            </div>

        </section>
    );
}

export default ChartShares;