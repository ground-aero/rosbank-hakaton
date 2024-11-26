import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { TeamContext } from '../../../../../context/context'
import { DB_URL } from "../../../../../utils/constants";
import ChartDynamicSkills from '../../../../Charts/ChartDynamicSkills'

function SkillsDynamic() {
    const { isTeamId, selectedEmployee } = useContext(TeamContext);
    const [ isFetchingData, setFetchingData] = useState(false)
    const [ isAllPoints, setAllPoints] = useState([])

    // console.log('isTeamId, selectedEmployee::',isTeamId, Object.keys(selectedEmployee).length)
    const fetchSkillsDynamic = useCallback(async () => {
        setFetchingData(true);

        try {
            let url = '';
            let responseData = [];

            // Prioritize employee selection
            // Prioritize employee selection
            if (selectedEmployee && Object.keys(selectedEmployee).length > 0) {

                url = `${DB_URL}/api/v1/dashboard/skills_development/?employee=${selectedEmployee.id}`;
                const { data } = await axios.get(url, {
                    headers: { 'Accept': 'application/json' },
                });
                responseData = data;

            } else if (isTeamId || isTeamId === null) {

                url = isTeamId
                        ? `${DB_URL}/api/v1/dashboard/skills_development/?team=${isTeamId}`
                        : `${DB_URL}/api/v1/dashboard/skills_development`;

                const { data } = await axios.get(url, {
                    headers: { 'Accept': 'application/json' },
                });
                responseData = data;
            }

            setAllPoints(responseData);
        } catch (err) {
            console.error(err);
        } finally {
            setFetchingData(false);
        }
    }, [isTeamId, selectedEmployee]); //selectedEmployee

    useEffect(() => {
        fetchSkillsDynamic();
    }, [fetchSkillsDynamic]);

    return (
        <>
            { isFetchingData ? (
                <div>Loading...</div>
            ) : (
                <ChartDynamicSkills data={ isAllPoints } />
                // <div>Chart Dynamic.</div>
            )}
        </>
    )
}

export default SkillsDynamic