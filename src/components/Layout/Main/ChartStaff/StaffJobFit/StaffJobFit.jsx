import { useState, useEffect, useContext, useCallback } from 'react'
import api from '../../../../../api/api'
import globalStyles from '../../../../../globals.module.css'
import { NoData } from '../../../../../icons'
import { AppContext } from "../../../../../context/context"

function StaffJobFit() {
    const [isTeamSuitStaff, setTeamSuitStaff] = useState([]);
    const [currentView, setCurrentView] = useState('teamStaff');
    const {
        employees,
        isEmployeeId,
        setEmployeeId,
        selectedEmployee,
        setSelectedEmployee,
        employeesByPosition,
        isTeamId,
        isTeamName,
        setTeamName,
        setTeamTotal,
        selectedPosition,
        setSelectedPosition,
    } = useContext(AppContext);

    // список сотрудников isTeamSuitStaff в зависимости от: isTeamId
    const getTeamsIdSuitPosition = useCallback(async () => {
        try {
            if (isTeamId === null) {
                let data = await api.getTeamsAllSuitPosition()
                setTeamSuitStaff(data);
                setTeamTotal(data?.length);
                // setCurrentView('teamStaff');
          // console.log(data)
            } else if (isTeamId) {
                let data = await api.getTeamsIdSuitPosition(isTeamId)
                setTeamSuitStaff(data);
                setTeamTotal(data?.length);
                // setCurrentView('teamStaff');
            }
            // else if (selectedPosition) {
            //
            // }
        } catch (err) {
            console.error(err);
        }
    }, [isTeamId, setTeamTotal]);

  console.log('isTeamSuitStaff:', isTeamSuitStaff)

    useEffect(() => {
        getTeamsIdSuitPosition();
    }, [getTeamsIdSuitPosition]);

    // устанавливаем в контекст и в данный график isTeamName
    const getTeamName = useCallback(async () => {
        try {
            if (isTeamId === null) {
                setTeamName('');
            } else {
                let data = await api.getTeams(isTeamId)
                const teamName = data.find((team) => team.id === isTeamId)
                setTeamName(teamName.name);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isTeamId, setTeamName]);

    useEffect(() => {
        getTeamName();
    }, [getTeamName]);

    // по клику на строку, находим Сотрудника и обогащаем поля (из объекта employees),
    // устанавливаем в контекст isSelectedEmployee
    const handleRowClick = useCallback((clickedEmployeeId, clickedEmployeeName) => {
        console.log("Clicked Employee ID, clickedEmployeeName:", clickedEmployeeId,clickedEmployeeName);
        console.log("Current employees array:", employees);

        if (Number(clickedEmployeeId) === Number(isEmployeeId)) {
            setEmployeeId(null);
            setSelectedEmployee(null);
            setCurrentView('teamStaff');
        } else {
            setEmployeeId(clickedEmployeeId);

            // Находим сотрудника в массиве employees
            const selectedEmployeeLocal = employees.find(employee => {
                return Number(employee.id) === Number(clickedEmployeeId);
            });

         console.log("Found employee:", selectedEmployeeLocal);

            // Разбиваем имя на ФИО
            const [lastName, firstName] = clickedEmployeeName.split(' ');

            // Создаем объект с обогащенными полями из объекта employees
            const employeeEnrichedObject = {
                last_name: lastName,
                first_name: firstName,
                id: Number(clickedEmployeeId),
                position: selectedEmployeeLocal?.position || '',
                grade: selectedEmployeeLocal?.grade || '',
                team: selectedEmployeeLocal?.team || ''
            };

          console.log("Created employee object:", employeeEnrichedObject);

            setSelectedEmployee(employeeEnrichedObject);
            setSelectedPosition(null)
            setCurrentView('teamStaff');
        }
    }, [isEmployeeId, setEmployeeId, setSelectedEmployee, employees]);

  // Новый эффект для обработки выбора должности и команды
  useEffect(() => {
    if (selectedPosition) {
      // Always prioritize position selection
      setTimeout(() => {
        setTeamSuitStaff(employeesByPosition);
        setCurrentView('sortedPositionStaff');
      }, 500)

    } else if (isTeamId || isTeamName) {
      // Only change to team view if no position is selected
      getTeamsIdSuitPosition();
      setCurrentView('teamStaff');
    }
  }, [selectedPosition, isTeamId, isTeamName, employeesByPosition]);
  // console.log('selectedPosition in_', selectedPosition)
  console.log('CurrentView""":', currentView)

    return (
        <table className={globalStyles.table}>

            { currentView === 'teamStaff' &&
                isTeamSuitStaff?.length === 0
                    ? (
                <div className={globalStyles.tableNoDataBox}>
                  {/*<td colSpan="2" className={globalStyles.tableColLeft}>В фильтре выберите данные</td>*/}
                  <img src={NoData} className={globalStyles.noDataImg} alt="no data"/>
                </div>
              ) : (
                isTeamSuitStaff.map((employee, i) => (
                        <tr
                            key={i}
                            onClick={() => handleRowClick(
                                employee.employee_id,
                                employee.employee
                            )}
                            className={`${globalStyles.tableRow} ${isEmployeeId === employee.employee_id ? globalStyles.tableRowSelected : ''}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <td className={globalStyles.tableColLeft}>{employee.employee}</td>
                            <td className={globalStyles.tableColRight}>{`${employee.percentage}%`}</td>
                        </tr>
                      ))
                    )
            }

            {currentView === 'sortedPositionStaff'
              ?
              (
                <tr className={globalStyles.tableRow}>
                  <td className={globalStyles.tableColLeft}>
                    <p>here goes Staff filtered by Position </p>
                    {/*{`${selectedEmployee.last_name} ${selectedEmployee.first_name}`}*/}
                    {/*{selectedEmployee.position && ` - ${selectedEmployee.position}`}*/}
                  </td>
                  {/*<td className={globalStyles.tableColRight}>{`${'percentage'}%`}</td>*/}
                </tr>
              )
              : ''
            }

        </table>
    );
}

export default StaffJobFit;