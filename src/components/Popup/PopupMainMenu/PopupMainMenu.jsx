import { useState } from 'react'
import PopupWithForm from '../PopupWithForm'
import styles from './PopupMainMenu.module.css'
import { useContext, useEffect } from "react"
import { AppContext } from "../../../context/context"
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
        setEmployeesByPosition,
        positions,
        setPositions,
        isPositionId,
        setPositionId,
        selectedPosition,
        setSelectedPosition,
    } = useContext(AppContext);

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

                setEmployees(data); // В контекст устанавливаем список всех сотрудников
                localStorage.setItem('employees', JSON.stringify(data))
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchEmployees()
    },[setEmployees])

    // Получаем список Должностей при монтировании компонента, сохраняем в контекст, и при выборе
    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const data = await api.getPositions();
                setPositions(data);
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchPositions()
    },[setPositions])

    // Обработчик изменения выбора Команды через select
    const handleTeamChange = (teamId) => {

        setEmployeeId(null);
        setSelectedEmployee({});
        setSelectedPosition(null)

        // В контекст устанавливаем id выбранной команды (teamId), или  null если все команды
        const numericTeamId = Number(teamId) || null
        setTeamId(numericTeamId || null)

        // В контекст устанавливаем имя выбранной Команды
        const selectedTeam = teams.find(team => team.id === numericTeamId)

        if (selectedTeam) {
            setTeamName(selectedTeam.name || '')
        }
    }
   // console.log("isTeamId, isTeamName", isTeamId, isTeamName)

    // Обработчик изменения выбора сотрудника через select
    const handleEmployeeChange = (employeeId) => {
        const numericEmployeeId = Number(employeeId) || null

        // В контекст устанавливаем id выбранного сотрудника
        setEmployeeId(numericEmployeeId)
        setPositionId(null)
        setSelectedPosition(null)

        // В контекст устанавливаем имя выбранного сотрудника
        const selectedEmployeeLocal = employees.find(employee => Number(employee.id) === numericEmployeeId)

        if (selectedEmployeeLocal?.last_name) {
            setSelectedEmployee(selectedEmployeeLocal)
        }
    }

    // Обработчик выбора должности, и обновляет контексты: selectedPosition, employees
    const handlePositionChange = (positionId) => {
      // Сбрасываем ранее выбранного сотрудника //Show all employees when "All Teams" is selected??
      setEmployeeId(null);
      setSelectedEmployee({});

      const numericPositionId = Number(positionId) || null
      // В контекст устанавливаем id выбранной должности, или  null если все должности
      setPositionId(numericPositionId || null)

      // Выбираем должность
      const selectedPosition = positions.find(position => position.id === numericPositionId)

      // Устанавливаем Должность в контекст, и ее имя (?)
      if (selectedPosition) {

          // сбрасываем конкретную Команду
          setTeamId(null)

          setPositionName(selectedPosition.name || '')
          setSelectedPosition(selectedPosition)

          // СОРТИРУЕМ СПИСОК СОТРУДНИКОВ, ПО ДОЛЖНОСТИ (НЕ ПО КОМАНДЕ)
          // Инициализирую контекст для employeesByPosition
          const sortedEmployeesByPosition = employees.filter(employee => employee.position === selectedPosition.name)
          // сохраняем в контекст employeesByPosition
          // может зд. обобгатить поля _employee.percentage
            setEmployeesByPosition(sortedEmployeesByPosition)

      } else if (selectedPosition === undefined) {
          setSelectedPosition(null); // чтоб анулировать снова до полного списка сотрудников
      }
    }

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
                    <option
                      value="allStaff"
                      className={styles.optionDefault}>--Сотрудники--</option>
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
                    <option
                      value="allPositions"
                      className={styles.optionDefault}>--Должности--</option>
                    { positions.map((position) => (
                        <option
                          key={position.id}
                          value={position.id}
                          className={styles.option}
                        >
                            { position.name }
                        </option>
                    ))}
                </select>

            </div>
        </PopupWithForm>
    )
}

export default PopupMainMenu;