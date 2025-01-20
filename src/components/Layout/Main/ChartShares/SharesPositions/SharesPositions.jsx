import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { TeamContext } from '../../../../../context/context'
import { DB_URL } from "../../../../../utils/constants";
import ChartDoughnut from '../../../../Charts/ChartDoughnut'

function SharesPositions() {
    const { isTeamId,
        selectedEmployee,
        isPositionName,
        selectedPosition,
    } = useContext(TeamContext);
    const [ isFetchingData, setFetchingData] = useState(false)
    const [ isAllPositions, setAllPositions] = useState([])

  // console.log('isTeamId, selectedEmployee::',isTeamId, Object.keys(selectedEmployee).length)
    // запрашивает данные по API в зависимости от выбранной: команды / сотрудника/ должности
    const fetchEmployeePositions = useCallback(async () => {
        setFetchingData(true);

        try {
            let url = '';
            let responseData = [];

            // Prioritize employee selection
            if (selectedEmployee && Object.keys(selectedEmployee).length > 0) {

                url = `${DB_URL}/api/v1/dashboard/employee_positions/?employee=${selectedEmployee.id}`;
                const { data } = await axios.get(url, {
                    headers: { 'Accept': 'application/json' },
                });
                responseData = data;
            }
            // Clear selectedEmployee when team is selected
            else if (isTeamId || isTeamId === null) {

                url = isTeamId
                    ? `${DB_URL}/api/v1/dashboard/employee_positions/?team=${isTeamId}`
                    : selectedPosition?.id
                        ? `${DB_URL}/api/v1/dashboard/employee_positions/?position=${selectedPosition?.id}`
                        : `${DB_URL}/api/v1/dashboard/employee_positions/`;


                const { data } = await axios.get(url, {
                    headers: { 'Accept': 'application/json' },
                });
                responseData = data;
            }

         // console.log("responseData:",responseData)

            setAllPositions(responseData);
        } catch (err) {
            console.error(err);
        } finally {
            setFetchingData(false);
        }
    }, [isTeamId, selectedEmployee, selectedPosition]); //selectedEmployee

    useEffect(() => {
        fetchEmployeePositions();
    }, [fetchEmployeePositions]);

    return (
        <>
            { isFetchingData ? (
                <div>Loading...</div>
            ) : (
                <ChartDoughnut data={isAllPositions} />
            )}
        </>
    )
}

export default SharesPositions