import PopupWithForm from '../PopupWithForm'
import styles from './PopupMainMenu.module.css'
import { useContext, useEffect } from "react"
import { TeamContext } from "../../../context/context"
import api from "../../../api/api"

function PopupMainMenu({ onOpen, onClose, name, onSubmit, textBtn }) {
    const { teams, setTeams, isTeamId, setTeamId, isTeamName, setTeamName,
        employees, setEmployees, isEmployeeId, setEmployeeId, selectedEmployee, setSelectedEmployee} = useContext(TeamContext);
    // const [ teams, setTeams ] = useState([])

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
    },[])

    // Получаем список всех Сотрудников при монтировании компонента
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await api.getEmployees();

                // В контекст устанавливаем список всех сотрудников
                setEmployees(data);
          console.log("data", data)
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }
        fetchEmployees()
    },[])

    // Обработчик изменения выбора команды через select
    const handleTeamChange = (teamId) => {
        const numericTeamId = Number(teamId) || null

        // В контекст устанавливаем id выбранной команды (teamId)
        setTeamId(numericTeamId || null)

        // В контекст устанавливаем имя выбранной команды
        const selectedTeam = teams.find(team => team.id === numericTeamId)

        if (selectedTeam) {
            setTeamName(selectedTeam.name || '')
        }

     console.log(teamId)
        // Filter employees based on selected team
        if (teamId === "allTeams") {
            // Show all employees when "All Teams" is selected
            setEmployeeId(null);
            setSelectedEmployee({});
        }
    }

   console.log("isTeamId, isTeamName", isTeamId, isTeamName)

    // Обработчик изменения выбора сотрудника через select
    const handleEmployeeChange = (employeeId) => {
        const numericEmployeeId = Number(employeeId)

        // В контекст устанавливаем id выбранного сотрудника
        setEmployeeId(numericEmployeeId)

        // В контекст устанавливаем имя выбранного сотрудника
        const selectedEmployeeLocal = employees.find(employee => Number(employee.id) === numericEmployeeId)

         console.log(selectedEmployeeLocal)

        if (selectedEmployeeLocal.last_name) {
            // setSelectedEmployee(`${selectedEmployeeLocal.last_name} ${selectedEmployeeLocal.first_name}`)
            setSelectedEmployee(selectedEmployeeLocal)
        }
    }
    console.log("selectedEmployee:",selectedEmployee)

    // console.log(onOpen)
    return (
        <PopupWithForm
            name={name}
            onSubmit={onSubmit}
            onOpen={onOpen}
            onClose={onClose}
            textBtn={textBtn}
        >
            <p>children...</p>

            <div className={styles.selectContainer}>
                <select
                    name='team'
                    value={isTeamId || ''}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="allTeams" className={styles.optionDefault}>--Все Команды--</option>
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
                    <option value="allStaff" className={styles.optionDefault}>--Все Сотрудники--</option>
                    {( isTeamId === null
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

            </div>
        </PopupWithForm>
    )
}

export default PopupMainMenu;