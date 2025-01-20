import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import ChartLeftBars from '../../../../Charts/ChartLeftBars'
import { TeamContext } from '../../../../../context/context'
import { DB_URL } from "../../../../../utils/constants";

function SkillsLevel() {
    const { isEmployeeId, isTeamId } = useContext(TeamContext);
    const [isFetchingData, setFetchingData] = useState(false)
    const [isAllSkills, setAllSkills] = useState([])

    const fetchSkills = useCallback(async () => {
        // if (!isTeamId) return;

        setFetchingData(true)
        // let url = isEmployeeId
        //     ? `${DB_URL}/api/v1/dashboard/suitability_position/${isEmployeeId}/skills`
        //     : `${DB_URL}/api/v1/dashboard/skill_level/?team=${isTeamId}`;
        let url = isEmployeeId
            ? `${DB_URL}/api/v1/dashboard/suitability_position/${isEmployeeId}/skills`
            : isTeamId === null
              ? `${DB_URL}/api/v1/dashboard/skill_level`
                    : `${DB_URL}/api/v1/dashboard/skill_level/?team=${isTeamId}`;

        try {
            let { data } = await axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
    // console.log('setAllSkills data:',data)
            setAllSkills(data)
            return data;
        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }, [isEmployeeId, isTeamId]);

    useEffect(() => {
        // if (isTeamId) {
        //     fetchSkills();
        // }
        fetchSkills();
    }, [isTeamId, fetchSkills]);

    return (
        <div>
            { isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <ChartLeftBars key={isEmployeeId || 'team'} data={isAllSkills}/>
            )}
        </div>
    )
}

export default SkillsLevel