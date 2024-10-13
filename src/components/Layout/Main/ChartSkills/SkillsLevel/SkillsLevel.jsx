import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import './SkillsLevel.css'
import ChartLeftBars from '../../../../Charts/ChartLeftBars'
import { TeamContext } from '../../../../../context/context'

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
            ? `http://127.0.0.1:8000/api/v1/dashboard/suitability_position/${isEmployeeId}/skills`
            : `http://127.0.0.1:8000/api/v1/dashboard/skill_level/?team=${isTeamId}`;

        try {
            let { data } = await axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            console.log(data)
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
            <p className='chart__subtitle'>
                {isEmployeeId ? 'ШКАЛЫ УРОВНЕЙ НАВЫКОВ СОТРУДНИКА' : 'СРЕДНИЕ УРОВНИ НАВЫКОВ КОМАНДЫ'}
            </p>

            {isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <ChartLeftBars key={isEmployeeId || 'team'} data={isAllSkills}/>
            )}

            {/* TEST FETCH BTN */}
            {/*<button onClick={fetchSkills} className='TEST-BTN'>Обновить данные</button>*/}
        </div>
    )
}

export default SkillsLevel