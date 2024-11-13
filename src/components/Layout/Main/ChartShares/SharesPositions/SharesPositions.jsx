import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { TeamContext } from '../../../../../context/context'
import { DB_URL } from "../../../../../utils/constants";
import ChartDoughnut from '../../../../Charts/ChartDoughnut'

function SharesPositions() {
    const { isTeamId } = useContext(TeamContext);
    const [isFetchingData, setFetchingData] = useState(false)
    const [isAllPositions, setAllPositions] = useState([])

    const fetchEmployeePositions = useCallback(async () => {
        if (!isTeamId) return;

        setFetchingData(true)
        let url = isTeamId
            ? `${DB_URL}/api/v1/dashboard/employee_positions/?team=${isTeamId}`
            : `${DB_URL}/api/v1/dashboard/employee_positions/`;

     console.log('isTeamId, url', isTeamId, url)
        try {
            let { data } = await axios.get(`${url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            setAllPositions(data)
     console.log('setAllPositions data:', data)
            return data;
        } catch (err) {
            console.error(err)
        } finally {
            setFetchingData(false)
        }
    }, [isTeamId, isTeamId]);

    useEffect(() => {
        if (isTeamId) {
            fetchEmployeePositions();
        }
    }, [isTeamId, fetchEmployeePositions]);

    return (
        <div>
            {isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <ChartDoughnut key={isTeamId || 'team id ?'} data={isAllPositions}/>
            )}
        </div>
    )
}

export default SharesPositions