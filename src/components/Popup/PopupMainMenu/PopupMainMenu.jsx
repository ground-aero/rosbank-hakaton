import { useState } from 'react'
import PopupWithForm from '../PopupWithForm'
import styles from './PopupMainMenu.module.css'
import { useContext, useEffect } from "react"
import { TeamContext } from "../../../context/context"
import api from "../../../api/api"

function PopupMainMenu({ onOpen, onClose, name, onSubmit, textBtn }) {
    const [isPositionName, setPositionName] = useState('')
    const { teams,
        setTeams,
        isTeamId,
        setTeamId,
        isTeamName,
        setTeamName,
        employees,
        setEmployees,
        isEmployeeId,
        setEmployeeId,
        selectedEmployee,
        setSelectedEmployee,
        positions,
        setPositions,
        isPositionId,
        setPositionId,
        selectedPosition,
        setSelectedPosition,
    } = useContext(TeamContext);

    // Получаем список Команд при монтировании компонента
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await api.getTeams();
                setTeams(data);
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchTeams()
    },[setTeams])

    // Получаем список всех Сотрудников при монтировании компонента
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await api.getEmployees();

                // В контекст устанавливаем список всех сотрудников
                setEmployees(data);
          console.log("setEmployees data:", data)
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchEmployees()
    },[setEmployees])

    // Получаем список Должностей при монтировании компонента
    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const data = await api.getPositions();
                setPositions(data);
          console.log("Positions data", data)
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchPositions()
    },[setPositions])
  console.log(positions)

    // Обработчик изменения выбора команды через select
    const handleTeamChange = (teamId) => {

        setEmployeeId(null);
        setSelectedEmployee({});
        setSelectedPosition(null)

        const numericTeamId = Number(teamId) || null
        // В контекст устанавливаем id выбранной команды (teamId), или  null если все команды
        setTeamId(numericTeamId || null)

        // В контекст устанавливаем имя выбранной команды
        const selectedTeam = teams.find(team => team.id === numericTeamId)

        if (selectedTeam) {
            setTeamName(selectedTeam.name || '')
        }

     console.log('teamId:',teamId)
    }

   console.log("isTeamId, isTeamName", isTeamId, isTeamName)

    // Обработчик изменения выбора сотрудника через select
    const handleEmployeeChange = (employeeId) => {
        const numericEmployeeId = Number(employeeId) || null

        // В контекст устанавливаем id выбранного сотрудника
        setEmployeeId(numericEmployeeId)
        setPositionId(null)

        // В контекст устанавливаем имя выбранного сотрудника
        const selectedEmployeeLocal = employees.find(employee => Number(employee.id) === numericEmployeeId)

         console.log('selectedEmployeeLocal, isTeamId::',selectedEmployeeLocal, isTeamId)

        if (selectedEmployeeLocal?.last_name) {
            setSelectedEmployee(selectedEmployeeLocal)
        }
    }
    console.log("selectedEmployee:",selectedEmployee)

    // Обработчик изменения выбора должности и обновляет контекст
    const handlePositionChange = (positionId) => {
        const numericPositionId = Number(positionId) || null

        // В контекст устанавливаем id выбранной должности, или  null если все должности
        setPositionId(numericPositionId || null)

        // В контекст устанавливаем имя выбранной команды
        const selectedPosition = positions.find(position => position.id === numericPositionId)

        if (selectedPosition) {
            setPositionName(selectedPosition.name || '')
            setSelectedPosition(selectedPosition)

            setTeamId(null)
        } else if (selectedPosition === undefined) {
            setSelectedPosition(null);
        }

        console.log('selectedPosition:',selectedPosition)
        // Show all employees when "All Teams" is selected??
        setEmployeeId(null);
        setSelectedEmployee({});
    }

    // console.log(onOpen)
    return (
        <PopupWithForm
            name={name}
            onSubmit={onSubmit}
            onOpen={onOpen}
            onClose={onClose}
            textBtn={textBtn}
        >
            <div className={styles.selectContainer}>
                <select
                    name='team'
                    value={isTeamId || ''}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="allTeams" className={styles.optionDefault}>--Команды--</option>
                    { teams.map((team) => (
                        <option key={team.id} value={team.id} className={styles.option}>
                            {team.name}
                        </option>
                    ))}
                </select>

                <select
                    name='employee'
                    value={isEmployeeId || ''}
                    onChange={(e) => handleEmployeeChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="allStaff" className={styles.optionDefault}>--Сотрудники--</option>
                    {(isTeamId === null
                            ? employees
                            : employees.filter(employee => employee.team === isTeamName)
                    ).map((employee) => (
                        <option
                            key={employee.id}
                            value={employee.id}
                            className={styles.option}
                        >
                            {`${employee.last_name} ${employee.first_name}`}
                        </option>
                    ))}
                </select>

                <select
                    name='position'
                    value={isPositionId || ''}
                    onChange={(e) => handlePositionChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="allPositions" className={styles.optionDefault}>--Должности--</option>
                    { positions.map((position) => (
                        <option key={position.id} value={position.id} className={styles.option}>
                            {position.name}
                        </option>
                    ))}
                </select>

            </div>
        </PopupWithForm>
    )
}

export default PopupMainMenu;