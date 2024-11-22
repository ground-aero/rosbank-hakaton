import { useState, useEffect, useContext, useCallback } from 'react'
import api from '../../../../../api/api'
import globalStyles from '../../../../../globals.module.css'
import { TeamContext } from "../../../../../context/context"

function StaffJobFit() {
    const [isTeamSuitStaff, setTeamSuitStaff] = useState([]);
    const [currentView, setCurrentView] = useState('teamStaff'); // 'teamStaff' or 'employeeName'
    const {
        isEmployeeId,
        setEmployeeId,
        selectedEmployeeName,
        setSelectedEmployeeName,
        isTeamId,
        isTeamName,
        setTeamName,
        setTeamTotal
    } = useContext(TeamContext);

    console.log(isTeamId)
    const getTeamsIdSuitPosition = useCallback(async () => {
        try {

            if (isTeamId === null) {
                let data = await api.getTeamsAllSuitPosition()
                setTeamSuitStaff(data);
                setTeamTotal(data?.length);
                setCurrentView('teamStaff');
            } else {
                let data = await api.getTeamsIdSuitPosition(isTeamId)
                setTeamSuitStaff(data);
                setTeamTotal(data?.length);
                setCurrentView('teamStaff');
            }

        } catch (err) {
            console.error(err);
        }
    }, [isTeamId, setTeamTotal]);

    useEffect(() => {
        getTeamsIdSuitPosition();
    }, [getTeamsIdSuitPosition]);

    const getTeamName = useCallback(async () => {
        try {
            if (isTeamId === null) {
                setTeamName('');
            } else {
                let data = await api.getTeamNames(isTeamId)
                const teamName = data.find((team) => team.id === isTeamId)
                console.log(teamName)
                setTeamName(teamName.name);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isTeamId]);

    useEffect(() => {
        getTeamName();
    }, [getTeamName]);

    const handleRowClick = useCallback((clickedEmployeeId, clickedEmployeeName) => {
        if (clickedEmployeeId === isEmployeeId) {
            setEmployeeId(null);
            setSelectedEmployeeName('');
            setCurrentView('teamStaff');
        } else {
            setEmployeeId(clickedEmployeeId);
            setSelectedEmployeeName(clickedEmployeeName);
            setCurrentView('teamStaff');
        }
    }, [isEmployeeId, setEmployeeId]);

    useEffect(() => {
        // Switch to employee name view when selectedEmployeeName is set
        if (selectedEmployeeName) {
            setCurrentView('teamStaff');
        }
    }, [selectedEmployeeName]);

    useEffect(() => {
        // Switch back to team staff view when team name changes
        if (isTeamName) {
            setCurrentView('teamStaff');
        }
    }, [isTeamName]);

    return (
        <table className={globalStyles.table}>
            <tbody>
            { currentView === 'teamStaff' ? (

                isTeamSuitStaff?.length === 0 ? (
                    <tr className={globalStyles.tableRow}>
                        <td colSpan="2" className={globalStyles.tableColLeft}>В фильтре выберите Команду</td>
                    </tr>
                ) : (
                        isTeamSuitStaff.map((employee, i) => (
                            <tr
                                key={i}
                                onClick={() => handleRowClick(employee.employee_id, employee.employee)}
                                className={`${globalStyles.tableRow} ${isEmployeeId === employee.employee_id ? globalStyles.tableRowSelected : ''}`}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className={globalStyles.tableColLeft}>{employee.employee}</td>
                                <td className={globalStyles.tableColRight}>{`${employee.percentage}%`}</td>
                            </tr>
                        ))
                    )


            ) : (
                <tr className={globalStyles.tableRow}>
                    <td colSpan="2" className={globalStyles.tableColLeft}>
                        { selectedEmployeeName }
                    </td>
                    <td className={globalStyles.tableColRight}>{`${'percentage'}%`}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default StaffJobFit;