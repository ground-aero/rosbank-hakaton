import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import styles from './SkillsLevel.module.css'
import ChartLeftBars from '../../../../Charts/ChartLeftBars'
import { TeamContext } from '../../../../../context/context'
import { DB_URL } from "../../../../../utils/constants";

function SkillsLevel() {
    const { isEmployeeId, isTeamId } = useContext(TeamContext);
    const [isFetchingData, setFetchingData] = useState(false)
    const [isAllSkills, setAllSkills] = useState([])

    console.log('isEmployeeId, isTeamId:', isEmployeeId, isTeamId)

    useEffect(() => {
        if (isTeamId) {
            fetchSkills();
        }
    }, [isEmployeeId, isTeamId]);
    const fetchSkills = async () => {
        if (!isTeamId) return;

        setFetchingData(true)
        // const db_url = 'https://jsonplaceholder.typicode.com/';
        let url = isEmployeeId
            ? `${DB_URL.serverUrl}/api/v1/dashboard/suitability_position/${isEmployeeId}/skills`
            : `${DB_URL.serverUrl}/api/v1/dashboard/skill_level/?team=${isTeamId}`;

        try {
            let { data } = await axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log("setAllSkills:", data)
            setAllSkills(data)
            return data;

        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }

    return (
        <div>
            <p className={styles.chartSubtitle}>
                {isEmployeeId ? 'ШКАЛЫ УРОВНЕЙ НАВЫКОВ СОТРУДНИКА' : 'СРЕДНИЕ УРОВНИ НАВЫКОВ КОМАНДЫ'}
            </p>

            {isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <ChartLeftBars key={isEmployeeId || 'team'} data={isAllSkills}/>
            )}
        </div>
    )
}

export default SkillsLevel